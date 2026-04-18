import { Stack } from "@mui/material";
import Footer from "components/misc/footer";
import NavBar from "components/misc/navBar";
import { ComboDetailsSchemaContext } from "context/comboDetailsSchemaContext";
import { useContext } from 'react';
import { Outlet } from "react-router-dom";
import { mainTheme } from "styles/themes/themes";
import GeneralErrorPage from "./pages/generalErrorPage";
import LoadingLoggedInUserPage from "./pages/loadingLoggedInUserPage";
import ValidUserCheckWrapper from "./pages/validUserCheckWrapper";
import { envListOverride } from "../util/envResolverUtilEs6";
import environments from "environments";
import EnvDirectoryPage from "./pages/envDirectoryPage";

export default function Root() {
  const comboDetailsSchema = useContext(ComboDetailsSchemaContext)
  const envs = envListOverride ?? environments

  let pageContent = null
  var host = window.location.host
  var subdomain = host.split('.')[0]
  if (envs.findIndex((e) => e.subDomain === subdomain) < 0) {
    pageContent = <EnvDirectoryPage />
  }
  else if (comboDetailsSchema.errorLoadingSchema) {
    pageContent = <GeneralErrorPage />
  } else if (comboDetailsSchema.comboDetailsSchema) {
    pageContent = <ValidUserCheckWrapper><Outlet /></ValidUserCheckWrapper>
  } else {
    pageContent = <LoadingLoggedInUserPage />
  }

  return (
    <Stack
      className="App"
      justifyContent="space-between"
      style={{
        backgroundImage: `linear-gradient(${mainTheme.palette.background.default}, ${mainTheme.palette.background.default})`,
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Stack style={{ minHeight: "87vh" }}>
        {pageContent}
      </Stack>
      <Footer />
    </Stack>
  );
}
