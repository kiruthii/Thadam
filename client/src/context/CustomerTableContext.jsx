import { createContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerFilter,
} from "../api/CustomerApi";

export const CustomerTableContext = createContext();

export const CustomerContextProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState()
  const [location, setLocation] = useState()
  const [role, setRole] = useState()
  const [designation, setDesignation] = useState()
  const {
    data: customers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers", search, location, role, designation],
    queryFn: () => getCustomers(search, location, role, designation),
  });

  const {
    data: filters = {},
  } = useQuery({
    queryKey: ["filters"],
    queryFn: getCustomerFilter,
  })

  const addCustomerMutation = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["customers"]);
    },
  });

  const updateCustomerMutation = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["customers"]);
    },
  });

  const deleteCustomerMutation = useMutation({
    mutationFn: (id) => deleteCustomer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
    },
  });

  return (
    <div>
      <CustomerTableContext.Provider
        value={{
          customers,
          isLoading,
          error,
          totalCustomers: customers.length ?? 0,
          search,
          filters,
          location,
          role,
          designation,
          setRole,
          setDesignation,
          setLocation,
          setSearch,
          addCustomer: addCustomerMutation.mutate,
          updateCustomer: updateCustomerMutation.mutate,
          deleteCustomer: deleteCustomerMutation.mutate,
        }}
      >
        {children}
      </CustomerTableContext.Provider>
    </div>
  );
};
