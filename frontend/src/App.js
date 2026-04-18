import "./App.css";
import "./styles/global.css";
import * as React from "react";
import NavBar from "./components/misc/navBar";
import ViewComboPage from "./components/viewCombo/viewComboPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import EditComboPage from "./components/editCombo/editComboPage";
import { SF6Render } from "./renderStrategies/commonComboButtonRenders";
import { useTheme } from "@mui/material/styles";
import { mainTheme } from "./styles/themes/themes";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { createContext } from "react";
import { ComboRenderContext } from "./context/comboRenderContext";
import { useState } from "react";
import { ButtonRenderProvider } from "./util/envResolverUtilEs6";
import { MotionRenderProvider } from "./util/envResolverUtilEs6";
import DirectionProvider from "./commonRenderProviders/directionRenderProvider";
import ComboSearchPage from "./components/pages/comboSetSearchPage";
import { Route, Outlet } from "react-router-dom";
import CharDirectoryPage from "./components/pages/comboSearchDirectoryPage";
import Footer from "./components/misc/footer";
import LoginPage from "./components/pages/loginPage";
import SignupPage from "./components/pages/signUpPage";
import { UserContext, FirebaseUserManager } from "./context/userContext";
import UserPage from "./components/pages/userPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SetDisplayNamePage from "./components/pages/setDisplayNamePage";
import MustBeLoggedInWrapper from "./components/pages/mustBeLoggedInWrapper";
import { router } from "./routes";
import HttpClient from "./services/httpClient";
import ComboRenderUtil from "util/comboRenderUtil";
import { ToastContext } from "context/toastContext";
import { ComboDetailsSchemaContext } from "context/comboDetailsSchemaContext";
import CharacterMultiSelectorField from "components/editCombo/dynamicFields/characterSelectorField";
import { gameData } from "util/envResolverUtilEs6";
import { CharacterContext } from "context/characterContext";

function App() {
  const [buttonRender, _setButtonRender] = useState({
    render: localStorage.getItem("buttonRenderName") !== null
      ? ButtonRenderProvider.getButtonRenderByName(
        localStorage.getItem("buttonRenderName"),
        mainTheme
      )
      : ButtonRenderProvider.getDefaultButtonRender(mainTheme),
    name:
      localStorage.getItem("buttonRenderName") ??
      ButtonRenderProvider.defaultButtonRenderName,
  });
  function setButtonRender(name, theme) {
    ButtonRenderProvider.setButtonRenderByName(name, _setButtonRender, theme);
  }
  const [motionRenderName, setMotionRenderName] = useState(
    localStorage.getItem("motionRenderName") ??
    MotionRenderProvider.defaultMotionRenderName
  );
  const [motionDirection, setMotionDirection] = useState(
    localStorage.getItem("motionRenderDirection") ??
    DirectionProvider.defaultDirection
  );
  const [collapseButtonRender, setCollapseButtonRender] = useState(
    (localStorage.getItem("collapseButtonRender") === "true")
  );
  const [showAllTags, setShowAllTags] = useState(
    (localStorage.getItem("showAllTags") === "true")
  );
  const [comboSize, setComboSize] = useState(
    (localStorage.getItem("comboSize")) ??
    ComboRenderUtil.ComboSize.REGULAR
  );
  const [hideActionName, setHideActionName] = useState(
    (localStorage.getItem("hideActionName") === "true")
  );

  const comboRenderContext = {
    buttonRender,
    setButtonRender,
    buttonRenderChoices: ButtonRenderProvider.buttonRenderChoices,
    motionRenderChoices: MotionRenderProvider.motionRenderChoices,
    motionRenderName,
    setMotionRenderName,
    getMotionComponent: MotionRenderProvider.getMotionRenderByName,
    motionDirection,
    setDirection: setMotionDirection,
    directionChoices: DirectionProvider.directionChoices,
    collapseButtonRender,
    setCollapseButtonRender: setCollapseButtonRender,
    showAllTags,
    setShowAllTags,
    comboSize,
    setComboSize,
    hideActionName,
    setHideActionName
  };
  const [userManager, setUserManager] = useState(new FirebaseUserManager(null));
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [hasDisplayName, setHasDisplayName] = useState(false);
  const [hasDBUser, setHasDBUser] = useState(false)
  const [errorLoadingUser, setErrorLoadingUser] = useState(false)

  const auth = getAuth();

  async function loadUser(user) {
    setErrorLoadingUser(false);
    setIsLoadingUser(true)

    if (user) {
      setUserManager(new FirebaseUserManager(user, null));

      if (!user.displayName) {
        setHasDisplayName(false)
        setIsLoadingUser(false);
      } else {
        setHasDisplayName(true)

        try {
          let getUserRes = await HttpClient.getUser(user.uid)

          if (getUserRes.status === 200) {

            userManager.setUserData(getUserRes.data)
            setHasDBUser(true)
          } else {
            const { data, status } = await HttpClient.createDBUser(await user.getIdToken())

            if (status !== 200) {
              setHasDBUser(false)
            } else {
              userManager.setUserData(data)
              setHasDBUser(true)
            }
          }
        } catch (e) {
          setHasDBUser(false)
          setErrorLoadingUser(true);
        }
      }
    } else {
      // User is signed out
    }

    setIsLoadingUser(false)
  }


  const userContext = {
    userManager,
    setUserManager,
    isLoadingUser,
    setIsLoadingUser,
    hasDisplayName,
    hasDBUser,
    loadUser,
    errorLoadingUser,
  };

  const [comboDetailsSchema, setComboDetailsSchema] = useState(null)
  const [errorLoadingSchema, setErrorLoadingSchema] = useState(false)
  const comboDetailsSchemaContext = {
    comboDetailsSchema,
    setComboDetailsSchema,
    errorLoadingSchema,
    setErrorLoadingSchema
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      loadUser(user); // required this way to run an async func
    });
  }, []);

  useEffect(() => {
    async function loadComboSchema() {
      setErrorLoadingSchema(false)
      const { data, status } = await HttpClient.getComboUISchema()
      if (status !== 200) {
        setErrorLoadingSchema(true)
      } else {
        setComboDetailsSchema(data)
      }
    }
    loadComboSchema()
  }, []);

  const [toastContent, setToastContent] = useState("")

  const toastContext = {
    toastContent,
    setToastContent
  }


  const [characterData, setCharacterData] = useState(gameData.defaultCharacterData)

  const defaultCharacterContext = {
    characterData,
    setCharacterData: (characterData) => { if (characterData) setCharacterData(characterData) }
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <ComboDetailsSchemaContext.Provider value={comboDetailsSchemaContext}>
        <UserContext.Provider value={userContext}>
          <CharacterContext.Provider value={defaultCharacterContext}>
            <ComboRenderContext.Provider value={comboRenderContext}>
              <ToastContext.Provider value={toastContext}>
                <RouterProvider router={router} />
              </ToastContext.Provider>
            </ComboRenderContext.Provider>
          </CharacterContext.Provider >
        </UserContext.Provider>
      </ComboDetailsSchemaContext.Provider>
    </ThemeProvider>
  );
}
export default App;
