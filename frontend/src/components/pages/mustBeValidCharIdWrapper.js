import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { characterData } from "util/envResolverUtilEs6";
import { useParams } from "react-router-dom";

export default function MustBeValidCharIdWrapper({ children }) {
  const userContext = useContext(UserContext);
  let { charId } = useParams();

  if (
    Object.keys(characterData).findIndex((c)=> c === charId) < 0
  ) {
    return <Navigate to="/404"/>
  } else {
    return children;
  }
}
