import { createContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from "../api/CustomerApi";

export const CustomerTableContext = createContext();

export const CustomerContextProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState();

  const {
    data: customers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers", search],
    queryFn: () => getCustomers(search),
  });

  const addCustomerMutation = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });

  const updateCustomerMutation = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });

  const deleteCustomerMutation = useMutation({
    mutationFn: (id) => deleteCustomer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });

  return (
    <CustomerTableContext.Provider
      value={{
        customers,
        isLoading,
        error,
        totalCustomers: customers.length ?? 0,
        search,
        setSearch,
        addCustomer: addCustomerMutation,
        updateCustomer: updateCustomerMutation,
        deleteCustomer: deleteCustomerMutation,
      }}
    >
      {children}
    </CustomerTableContext.Provider>
  );
};