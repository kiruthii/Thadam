import CustomerHeader from "../../components/customer/CustomerHeader";
import CustomerMoreInfo from "../../components/customer/CustomerMoreInfo";
import CustomerAddress from "../../components/customer/CustomerAddress";
import CustomerEngagement from "../../components/customer/CustomerEngagement";
import { getCustomerById } from "../../api/CustomerApi";
//import { deleteCustomer } from "../../api/CustomerApi";
import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../ui/button/Button";
import { CustomerTableContext } from "../../context/CustomerTableContextValue";
import DeleteConfirmation from "../../modules/Customer/actions/deleteConfirmation/DeleteConfirmation";
const CustomerInfoPage = () => {
  const { deleteCustomer } = useContext(CustomerTableContext);
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById(id);
        setCustomer(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCustomer();
  }, [id]);

  const navigate = useNavigate();
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
    navigate("/");
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setCustomerToDelete(null);
  };
  if (error) {
    return (
      <div className="text-center mt-5 text-danger ">
        <h3>{error}</h3>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="d-flex flex-column  justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary mb-2"></div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="container-fluid px-0">
      <div
        className=" py-4 "
        style={{ backgroundColor: "#eef2ff", color: "#2563eb" }}
      >
        <CustomerHeader customer={customer} />
        <div className="d-flex align-items-center gap-">
          <Button
            buttonText="Edit"
            className="btn btn-sm btn-primary ms-4"
            onClick={() => handleEdit(customer)}
            icon={<i className="me-2 bi bi-pencil-square"></i>}
          ></Button>

          <Button
            buttonText="Delete"
            className="btn btn-sm btn-danger ms-4"
            onClick={(e) => {
              e.stopPropagation();
              openDeleteConfirm(customer._id);
            }}
            icon={<i className="me-2 fa-regular fa-trash-can"></i>}
          />
        </div>
      </div>
      <div>
        <div
          className="row p-3 "
          style={{ backgroundColor: "#eef2ff", color: "#2563eb" }}
        >
          <div className="col-8 ">
            <CustomerMoreInfo customer={customer} />
          </div>
          <div className="col-4">
            <div className="pb-3">
              <CustomerAddress address={customer.address} />
            </div>
            <div className="pt-3">
              <CustomerEngagement engagement={customer} />
            </div>
          </div>
        </div>
      </div>
      <Button
        buttonText="Back to Dashboard"
        className="btn btn-primary mt-3 ms-4"
        onClick={() => navigate("/")}
        icon={<i className=" me-2 fa-solid fa-arrow-left"></i>}
      ></Button>

      <DeleteConfirmation
        show={showConfirm}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};
export default CustomerInfoPage;
