import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import LoadingLoggedInUserErrorPage from "./loadingLoggedInUserErrorPage";
import LoadingLoggedInUserPage from "./loadingLoggedInUserPage";
import SetDisplayNamePage from "./setDisplayNamePage";

export default function ValidUserCheckWrapper({ children }) {
  const userContext = useContext(UserContext);

  if (userContext?.isLoadingUser) {
    return <LoadingLoggedInUserPage />;
  } else if (!userContext.userManager?.isLoggedIn()) {
    return children
  } else if (!userContext?.hasDisplayName) {
    return <SetDisplayNamePage></SetDisplayNamePage>
  } else if (userContext.errorLoadingUser) {
    return <LoadingLoggedInUserErrorPage />
  } else {
    return children
  }
}
