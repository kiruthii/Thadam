import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AllCustomerContext } from "../../../contexts/allCustomerContext/AllCustomerContext";
import DeleteConfirmation from "../../actions/deleteCustomer/DeleteCustomer";
import FieldRender from "../../actions/fieldRender/FieldRender";

const CustomerCards = ({ table }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const { deleteCustomer } = useContext(AllCustomerContext);

  const navigate = useNavigate();

  const handleClick = (row) => {
    navigate(`/customer/${row.original?._id}`);
  };

  const handleEdit = (customer) => {
    navigate("/add-contact-form", { state: customer });
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
  return (
    <div>
      <div className="row g-3 mt-2">
        {table.getRowModel().rows.map((row) => {
          const customer = row.original;

          return (
            <div key={row.id} className="col-sm-1 col-md-2 col-xl-4 col-lg-3">
              <div
                className="card shadow-sm border-0 h-100 customer-card rounded"
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(row)}
              >
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-3 w-100">
                    <div
                      className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {customer?.firstname?.[0]}
                      {customer?.lastname?.[0]}
                    </div>

                    <div>
                      <h6 className="mb-0 text-secondary">
                        {customer.firstname} {customer.lastname}
                      </h6>
                      <small className="badge rounded-pill bg-success-subtle text-success">
                        {customer.designation}
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
                        <li onClick={() => handleEdit(customer)}>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-pen-to-square"></i> Edit
                          </a>
                        </li>
                        <li onClick={() => openDeleteConfirm(customer._id)}>
                          <a className="dropdown-item" href="#">
                            <i className="fa-regular fa-trash-can"></i> Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="mb-1 text-truncate text-secondary">
                    <i className="fa-solid fa-envelope me-2"></i>
                    <FieldRender type="email" value={customer.primaryEmail} />
                  </p>

                  <p className="mb-1 text-secondary">
                    <i className="fa-solid fa-phone me-2"></i>
                    <FieldRender
                      type="phone"
                      value={customer.primaryContactNo}
                    />  
                  </p>

                  <p className="mb-1 text-secondary">
                    <span>
                      <i className="fa-solid fa-building"></i>
                    </span>{" "}
                    <span>{customer.company}</span>
                  </p>

                  <p className="mb-1 text-secondary">
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>{" "}
                    <span>{customer.address?.city}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <DeleteConfirmation
          show={showConfirm}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      </div>
    </div>
  );
};

export default CustomerCards;
