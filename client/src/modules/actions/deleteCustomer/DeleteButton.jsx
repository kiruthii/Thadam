import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "../../actions/deleteCustomer/DeleteCustomer";
import { AllCustomerContext } from "../../../contexts/allCustomerContext/AllCustomerContext";
import Button from "../../../ui/button/Button";

const DeleteButton = ({ id, redirect = false ,icon,style,className="btn btn-sm",text}) => {
  const { deleteCustomer } = useContext(AllCustomerContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
     console.log("DELETE CLICKED");
    deleteCustomer(id);
    setShowConfirm(false);

    if (redirect) {
      navigate("/"); 
    }
  };

  return (
    <>
      <Button
        onClick={(e) => {
          e?.stopPropagation();
          setShowConfirm(true);
        }}
        icon={icon ||(<i className="fa-regular fa-trash-can text-danger"></i>)}
        style={style}
        className={className}
       buttonText={text} 
      />


      <DeleteConfirmation
        show={showConfirm}
        onConfirm={handleDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default DeleteButton;