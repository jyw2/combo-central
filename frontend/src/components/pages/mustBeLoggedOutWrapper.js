import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function MustBeLoggedOutWrapper({ children }) {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (
    userContext.userManager.isLoggedIn()
  ) {
    return <Navigate to="/"></Navigate>;
  } else {
    return children;
  }
}
