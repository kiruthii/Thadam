import DeleteConfirmation from "../deleteConfirmation/DeleteConfirmation";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  // getFilteredRowModel,
} from "@tanstack/react-table";

import { useMemo, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerTableContext } from "../../context/CustomerTableContext";
import Button from "../button/Button";
import CustomerControl from "./CustomerControl";
import ColumnSelector from "./ColumnSelector";
import AddHoverButton from "../button/AddHoverButton";
import Pagination from "./Pagination";



const CustomerTable = () => {
  const { customers, deleteCustomer,totalCustomers} = useContext(CustomerTableContext);

  const navigate = useNavigate();

  const data = useMemo(() => customers, [customers]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);

  const columns = useMemo(() => [
    {
      header: "Name",
      cell: ({ row }) => {
        const customer = row.original;

        return (
          <div className="d-flex gap-3">
              <div
                className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
                style={{ width: "30px", height: "30px", fontSize: "12px" }}
              >
                {customer?.firstname?.[0]}
                {customer?.lastname?.[0]}
              </div>
              <div className="mt-1">
                {customer?.firstname} {customer?.lastname}
              </div>
            </div>
        );
      },
    },
    // {
    //   header: "Name",
    //   accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    // },
    {
      header: "Email",
      accessorKey: "primaryEmail",
    },
    {
      header: "Designation",
      accessorKey: "designation",
    },
    {
      header: "PhoneNo",
      accessorKey: "primaryContactNo",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        const customer = row.original;

        return (
          <div className="d-flex gap-2">
            <Button
              className="btn btn-sm btn-warning"
              onClick={() => handleEdit(customer)}
              icon={<i className="fa-regular fa-pen-to-square"></i>}
            />

            <Button
              className="btn btn-sm btn-danger"
              onClick={() => openDeleteConfirm(customer._id)}
              icon={<i className="fa-regular fa-trash-can"></i>}
            />

            <Button
              className="btn btn-sm btn-secondary"
              onClick={() => handleClick(row)}
              icon={<i className="fa-regular fa-eye"></i>}
            />
          </div>
        );
      },
    },
  ], []);


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // state: {
    //   globalFilter: filtering,
    // },
    // onGlobalFilterChange: setFiltering,
  });

  const handleEdit = (customer) => {
    navigate("/add-customer-form", { state: customer });
  };

  const openDeleteConfirm = (id) => {
    setCustomerToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    deleteCustomer(customerToDelete);

   

    setShowConfirm(false);
    setCustomerToDelete(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setCustomerToDelete(null);
  };

  const handleClick = (row) => {
    navigate(`/customer/${row.original?._id}`);
  };

  return (
    <div className="container-fluid mt-3">
      
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted mb-2">Total Customers</h6>
              <h3 className="fw-bold text-primary">{totalCustomers}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
      <CustomerControl table={table}/>
     </div>
      <div className="table-responsive border rounded-3 py-1">
        <table className="table table-hover align-middle p-2">
          <thead className="table-light">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="align-middle text-center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="align-middle text-center">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            <AddHoverButton/>
     
      {customers.length>10 && <Pagination table={table}/>}

      <DeleteConfirmation
        show={showConfirm}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default CustomerTable;