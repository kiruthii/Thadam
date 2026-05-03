import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../customersTableController/pagination/Pagination";
import FloatingButton from "../../../ui/button/FloatingButton";
import CustomerController from "../customersTableController/customerController/CustomerController";
import CustomerCards from "../customerCards/CustomerCards";
// import { CustomerTableControllerContext } from "../../../contexts/customerTableControllerContext/CustomerTableControllerContext";
import { AllCustomerContext } from "../../../contexts/allCustomerContext/AllCustomerContext";

const CustomerTable = ({ data, columns }) => {
 const totalCustomers = data?.length || 0;
  // const { view } = useContext(CustomerTableControllerContext);
  const {customers,view} = useContext(AllCustomerContext);
  // console.log("view:", view);

  const navigate = useNavigate();

  const [columnVisibility, setColumnVisibility] = useState(() => {
    const savedColumns = localStorage.getItem("columnVisibility");
    return savedColumns ? JSON.parse(savedColumns) : {};
  });
  
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
     data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    
    state: {
      columnVisibility,
      sorting,
    },
    pagination: {
      pageSize: 10,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
  });


  useEffect(() => {
    localStorage.setItem("columnVisibility", JSON.stringify(columnVisibility));
  }, [columnVisibility]);

 useEffect(() => {
  if (view === "table") {
    table.setPageSize(10);
  } else {
    table.setPageSize(12);
  }
}, [view]);


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
        <CustomerController table={table} />
      </div>
      {view === "table" && (
        <div className="table-responsive border rounded-3">
          <table className="table table-borderless table-hover align-middle p-2">
            <thead className="table-light">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="align-middle text-center text-secondary fw-light"
                      onClick={
                        header.column.getCanSort()
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}

                      {header.column.getCanSort() && (
                        <span className="ms-1">
                          {header.column.getIsSorted() === "asc" && (
                            <i className="fa-solid fa-sort-up"></i>
                          )}
                          {header.column.getIsSorted() === "desc" && (
                            <i className="fa-solid fa-sort-down"></i>
                          )}
                          {!header.column.getIsSorted() && (
                            <i className="fa-solid fa-sort"></i>
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(row)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="align-middle text-center text-secondary fw-light"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {view === "card" && <CustomerCards table={table} />}

     {customers.length > 10 &&<Pagination table={table} />}
      <FloatingButton />
    </div>
  );
};

export default CustomerTable;
