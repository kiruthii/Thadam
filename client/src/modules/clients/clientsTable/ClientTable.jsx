import { useReactTable } from '@tanstack/react-table';
import { getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';
import React from 'react';
import Pagination from '../../customers/customersTableController/pagination/Pagination';
import FloatingButton from '../../../ui/button/FloatingButton';
import ClientController from '../clientsTableController/ClientController';
import { useContext } from 'react';
import { CustomerTableControllerContext } from '../../../contexts/customerTableControllerContext/CustomerTableControllerContext';
import ClientCards from '../clientsCards/ClientCards';
import { useState, useEffect} from 'react';
import { AllCustomerContext } from '../../../contexts/allCustomerContext/AllCustomerContext';


const ClientTable = ({columns, data}) => {

   const { view } = useContext(AllCustomerContext);
    const totalClients = data?.length || 0;

    const [columnVisibility, setColumnVisibility] = useState(() => {
        const savedColumns = localStorage.getItem("columnVisibility");
        return savedColumns ? JSON.parse(savedColumns) : {};
      });
    
      useEffect(() => {
        localStorage.setItem("columnVisibility", JSON.stringify(columnVisibility));
      }, [columnVisibility]);
    
     useEffect(() => {
      if (view === "table") {
        clientTable.setPageSize(10);
      } else {
        clientTable.setPageSize(12);
      }
    }, [view]);
    
      const [sorting, setSorting] = useState([]);

    const clientTable = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
         getSortedRowModel: getSortedRowModel(),
         pagination: {
      pageSize: 10,
    },
     state: {
      columnVisibility,
      sorting,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onSortingChange: setSorting,
    });
    
  return (
    <div className="container-fluid mt-3">
       <div className="row mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h6 className="text-muted mb-2">Total Clients</h6>
              <h3 className="fw-bold text-primary">{totalClients}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <ClientController table={clientTable} />
      </div>
       {view === "table" && (
      <div className="table-responsive border rounded-3">
          <table className="table table-borderless table-hover align-middle p-2">
            <thead className="table-light">
              {clientTable.getHeaderGroups().map((headerGroup) => (
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
              {clientTable.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  style={{ cursor: "pointer" }}
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
         {view === "card" && <ClientCards table={clientTable} />}
         {data.length > 10 &&<Pagination table={clientTable} />}
         <FloatingButton />
    </div>
  )
}

export default ClientTable;
