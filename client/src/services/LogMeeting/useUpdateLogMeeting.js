import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLogMeeting } from "../../api/CustomerApi";

export const useUpdateLogMeeting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateLogMeeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },
  });
};