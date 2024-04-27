import { useMutation } from "@tanstack/react-query";
import { loginFun } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: loginSupa, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginFun({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      navigate("/dashboard");
    },
    onError: (err) => {
      console.log(err);
      alert("wrong");
    },
  });
  return { loginSupa, isLoading };
}
