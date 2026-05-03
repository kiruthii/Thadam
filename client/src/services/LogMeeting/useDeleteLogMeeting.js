import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLogMeeting } from "../../api/CustomerApi";

export const useDeleteLogMeeting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLogMeeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
      queryClient.refetchQueries({ queryKey: ["customer"] })
    },
  });
};