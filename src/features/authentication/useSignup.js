import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupAPI } from "../../services/apiAuth.js";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (user) => {
      toast.success(
        `Account successfully created. Please verify the new account by clicking the link in the email sent to ${user.email}`,
      );
    },
  });

  return { signup, isLoading };
}
