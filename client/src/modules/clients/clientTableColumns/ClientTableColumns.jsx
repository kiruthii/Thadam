import React, { useMemo } from 'react'
import ClientTable from '../clientsTable/ClientTable';
import clientData from './MOCK_DATA (3).json'
import Button from "../../../ui/button/Button";

const ClientTableColumns = () => {

    const client = useMemo(() => clientData, [])

    const clientColumns = [
      {
      header: "Name",
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      cell: ({ row }) => {
        const client = row.original;

        return (
          <div className="d-flex gap-3">
            <div
              className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
              style={{ width: "30px", height: "30px", fontSize: "12px" }}
            >
              {client?.firstName?.[0]}
              {client?.lastName?.[0]}
            </div>
            <div className="mt-1 customer-access">
              {client?.firstName} {client?.lastName}
            </div>
          </div>
        );
      },
    },
    {
         header : "Email",
        accessorKey : "primaryEmail",
    },
    {
      header: "Designation",
      accessorKey: "designation",
      cell: ({ row }) => {
        const designation = row.original.designation;
        return (
          <span className="badge rounded-pill bg-success-subtle text-success">
            {designation}
          </span>
        );
      },
    },
    {
        header : "Phone",
        accessorKey : "primaryContactNo",
    },
    {
        header : "Company",
        accessorKey : "company",
    },
    {
      header: "Type",
      accessorKey: "contactType",
      cell: ({ row }) => {
        const type = row.original.contactType;
        return (
          <span className="badge rounded-pill bg-danger-subtle text-danger">
            {type}
          </span>
        );
      },
    },
    {
        header : "City",
        accessorKey : "city",

    },
    {
        header : "State",
        accessorKey: "state",

    },
    {
        header : "Country",
        accessorKey : "country"
    },
    {
        header : "Action",
          cell: () => {
    

        return (
          <div className="d-flex gap-2">
            <Button
              className="btn btn-sm btn-warning"
             
              icon={<i className="fa-regular fa-pen-to-square"></i>}
            />

            <Button
              className="btn btn-sm btn-danger"
             
              icon={<i className="fa-regular fa-trash-can"></i>}
            />
          </div>
        );
      },
    }
       

]

  return (
    <div>
      <ClientTable columns={clientColumns} data={client}/>
    </div>
  )
}

export default ClientTableColumns
