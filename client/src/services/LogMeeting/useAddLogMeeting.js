import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLogMeeting } from "../../api/CustomerApi";

export const useAddLogMeeting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addLogMeeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },
  });
};