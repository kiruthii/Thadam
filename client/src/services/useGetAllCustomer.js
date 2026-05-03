import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../api/CustomerApi";

export const useGetAllCustomer = (filters) => {
  return useQuery({
    queryKey: ["customers", filters],
    queryFn: () =>
      getCustomers(
        filters?.search,
        filters?.location,
        filters?.role,
        filters?.designation
      ),
  });
};