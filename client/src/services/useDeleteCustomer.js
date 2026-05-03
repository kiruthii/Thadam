import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCustomer } from "../api/customerApi";

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries(["customers"]);
    },
  });
};