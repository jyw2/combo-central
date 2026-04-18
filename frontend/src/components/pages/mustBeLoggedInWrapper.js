import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function MustBeLoggedInWrapper({ children }) {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  if (
    !userContext.userManager.isLoggedIn()
  ) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return children;
  }
}
