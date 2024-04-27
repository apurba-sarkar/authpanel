import { useEffect } from "react";
import useUser from "../authentication/useUser";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Protected({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(
    function () {
      console.log(isAuthenticated,isLoading);

      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

//   if (isAuthenticated) 
  return children;
}
