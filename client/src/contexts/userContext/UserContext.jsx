import { createContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, updateUserProfile } from "../../api/userApi";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  const updateMutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]);
    },
  });

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        updateUser: updateMutation.mutate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};