import "./App.css";
import "./styles/global.css";
import * as React from "react";
import ViewComboPage from "./components/viewCombo/viewComboPage";
import ViewComboSetPage from "./components/comboSets/viewComboSetPage";
import EditComboPage from "./components/editCombo/editComboPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ComboSearchPage from "./components/pages/comboSearchPage";
import { Route } from "react-router-dom";
import CharDirectoryPage from "./components/pages/comboSearchDirectoryPage";
import LoginPage from "./components/pages/loginPage";
import SignupPage from "./components/pages/signUpPage";
import UserPage from "./components/pages/userPage";
import SetDisplayNamePage from "./components/pages/setDisplayNamePage";
import MustBeLoggedInWrapper from "./components/pages/mustBeLoggedInWrapper";
import UnauthorizedPage from "./components/pages/UnauthorizedPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ComboSetSearchPage from "./components/pages/comboSetSearchPage";
import EditComboSetPage from "components/comboSets/editComboSetPage";
import PasswordResetPage from "components/pages/passwordResetPage";
import Root from "./components/root";
import HomePage from "components/pages/homePage";
import TermsOfServicePage from "components/pages/termsOfServicePage";
import PrivacyPolicyPage from "components/pages/privacyPolicyPage";
import MustBeLoggedOutWrapper from "components/pages/mustBeLoggedOutWrapper";
import CookiePolicyPage from "components/pages/cookiePolicyPage";
import ThirdPartyLicensesPage from "components/pages/thirdPartyPage";
import ContactPage from "components/pages/contactPage";
import MustBeValidCharIdWrapper from "components/pages/mustBeValidCharIdWrapper";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="403" element={<UnauthorizedPage />} />
      <Route
        path=""
        element={
          <HomePage />
        }
      />
      <Route path="login" element={<MustBeLoggedOutWrapper><LoginPage /></MustBeLoggedOutWrapper>} />
      <Route path="signup" element={<MustBeLoggedOutWrapper><SignupPage /></MustBeLoggedOutWrapper>} />
      <Route path="password-reset" element={<PasswordResetPage />} />
      <Route path="tos" element={<TermsOfServicePage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="third-party" element={<ThirdPartyLicensesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="cookies" element={<CookiePolicyPage />} />
      <Route path="setdn" element={<SetDisplayNamePage />} />
      <Route path="combo/:charId/:comboId" element={<MustBeValidCharIdWrapper><ViewComboPage /></MustBeValidCharIdWrapper>} />
      <Route
        path="combo-set/:charId/:comboSetId"
        element={<MustBeValidCharIdWrapper><ViewComboSetPage /></MustBeValidCharIdWrapper>}
      />
      <Route
        path="combo/edit/:editType/:charId"
        element={
          <MustBeLoggedInWrapper>
            <MustBeValidCharIdWrapper>
              <EditComboPage />
            </MustBeValidCharIdWrapper>
          </MustBeLoggedInWrapper>
        }
      />
      <Route
        path="combo/edit/:editType/:charId/:comboId"
        element={
          <MustBeLoggedInWrapper>
            <MustBeValidCharIdWrapper>
              <EditComboPage />
            </MustBeValidCharIdWrapper>
          </MustBeLoggedInWrapper>
        }
      />
      <Route
        path="combo-set/edit/:editType/:charId/:comboSetId"
        element={
          <MustBeLoggedInWrapper>
            <MustBeValidCharIdWrapper>
              <EditComboSetPage />
            </MustBeValidCharIdWrapper>
          </MustBeLoggedInWrapper>
        }
      />
      <Route
        path="combo-set/edit/:editType/:charId"
        element={
          <MustBeLoggedInWrapper>
            <MustBeValidCharIdWrapper>
              <EditComboSetPage />
            </MustBeValidCharIdWrapper>
          </MustBeLoggedInWrapper>
        }
      />
      <Route path="combo/search/:charId" element={<MustBeValidCharIdWrapper><ComboSearchPage /></MustBeValidCharIdWrapper>} />
      <Route path="combo-set/search/:charId" element={<MustBeValidCharIdWrapper><ComboSetSearchPage /></MustBeValidCharIdWrapper>} />
      <Route
        path="user/:userId/:entity/:charId"
        element={
          <MustBeLoggedInWrapper>
            <MustBeValidCharIdWrapper>
              <UserPage />
            </MustBeValidCharIdWrapper>
          </MustBeLoggedInWrapper>
        }
      ></Route>
      <Route
        path="user/:userId"
        element={
          <MustBeLoggedInWrapper>
            <UserPage />
          </MustBeLoggedInWrapper>
        }
      ></Route>
      <Route
        path="user/:userId/:entity"
        element={
          <MustBeLoggedInWrapper>
            <UserPage />
          </MustBeLoggedInWrapper>
        }
      ></Route>
      <Route
        path="combo/search"
        element={
          <CharDirectoryPage
            url="/combo/search"
            title="SEARCH"
            gutterText="combos"
            entityName="COMBOS"
          />
        }
      />
      <Route
        path="combo-set/search"
        element={
          <CharDirectoryPage
            url="/combo-set/search"
            title="SEARCH"
            gutterText="SETS"
            entityName="COMBO SETS"
          />
        }
      />
      <Route
        path="combo/create"
        element={
          <MustBeLoggedInWrapper>
            {" "}
            <CharDirectoryPage
              url="/combo/edit/create"
              title="CREATE"
              gutterText="Creating combos"
              entityName="COMBOS"
            />
          </MustBeLoggedInWrapper>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
