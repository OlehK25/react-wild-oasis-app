import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
// import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    // mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    // onError: (err) => toast.error(err.message),
    onError: (err) => toast.error("Now you can`t update your profile"),
  });

  return { updateUser, isUpdating };
}
