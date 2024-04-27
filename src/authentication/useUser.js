import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export default function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  const isAuthenticated = user && user.role === "authenticated";
  return { isLoading, user, isAuthenticated };
}
