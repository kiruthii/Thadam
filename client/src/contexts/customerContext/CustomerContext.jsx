import { createContext } from "react";
import { useParams } from "react-router-dom";
import { useGetCustomer } from "../../services/useGetCustomer";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const { id } = useParams();
  const {
    data: customer,
    isLoading,
    error,
    refetch,
  } = useGetCustomer(id);

  return (
    <CustomerContext.Provider
      value={{
        customer,
        isLoading,
        error,
        refetch,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};