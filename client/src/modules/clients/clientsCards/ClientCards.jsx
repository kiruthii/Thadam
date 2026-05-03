import React from 'react';
import FieldRender from "../../actions/fieldRender/FieldRender";

const ClientCards = ({table}) => {

  return (
    <div>
      <div className="row g-3 mt-2">
        {table.getRowModel().rows.map((row) => {
          const client = row.original;

          return (
            <div key={row.id} className="col-sm-1 col-md-2 col-xl-4 col-lg-3">
              <div
                className="card shadow-sm border-0 h-100 customer-card rounded"
                style={{ cursor: "pointer" }}
               
              >
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-3 w-100">
                    <div
                      className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {client?.firstName?.[0]}
                      {client?.lastName?.[0]}
                    </div>

                    <div>
                      <h6 className="mb-0 text-secondary">
                        {client.firstName} {client.lastName}
                      </h6>
                      <small className="badge rounded-pill bg-success-subtle text-success">
                        {client.designation}
                      </small>
                    </div>
                    <div
                      className="dropdown position-absolute top-0 end-0 m-2 "
                      onClick={(e) => e.stopPropagation()}
                      style={{ zIndex: 1000 }}
                    >
                      <button
                        className="btn btn-light"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-pen-to-square"></i> Edit
                          </a>
                        </li>
                        <li >
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can"></i> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mb-1 text-truncate text-secondary">
                    <i className="fa-solid fa-envelope me-2"></i>
                    <FieldRender type="email" value={client.primaryEmail} />
                  </p>

                  <p className="mb-1 text-secondary">
                    <i className="fa-solid fa-phone me-2"></i>
                    <FieldRender
                      type="phone"
                      value={client.primaryContactNo}
                    />  
                  </p>

                  <p className="mb-1 text-secondary">
                    <span>
                      <i className="fa-solid fa-building"></i>
                    </span>{" "}
                    <span>{client.company}</span>
                  </p>

                  <p className="mb-1 text-secondary">
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>{" "}
                    <span>{client.address?.city}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
     
    </div>
  );
}

export default ClientCards
