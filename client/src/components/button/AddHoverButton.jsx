import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const AddHoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/add-customer-form")
  }

  return (
    <div className="position-relative mt-5" style={{cursor : "pointer"}}>
    <div 
      onClick={handleNavigate}
      className="position-absolute top-50 start-50 translate-middle"
    >
      <motion.div
        initial={{ width: 45, height: 45 }}
        whileHover={{ width: 220 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 0.2 }}
       className="bg-primary d-flex align-items-center justify-content-center overflow-hidden cursor-pointer"
        style={{ borderRadius: 32 }}
      >
        <motion.div
          className="position-absolute"
          animate={{ 
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-white fs-5"> <i className="fa-solid fa-plus"></i></span>
        </motion.div>

        <motion.div
          className="w-100 d-flex justify-content-center align-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0 }}
        >
          <span className="text-white fs-10 fw-bold text-nowrap">
            Add Customer
          </span>
        </motion.div>
      </motion.div>
    </div>
    </div>
  )
}


export default AddHoverButton;