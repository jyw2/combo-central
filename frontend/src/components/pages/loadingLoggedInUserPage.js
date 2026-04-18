import {
  CircularProgress
} from "@mui/material";
import { CharacterContext } from "context/characterContext";
import "firebaseui/dist/firebaseui.css";
import { useContext } from "react";
import GutterBackground from "../shared/gutterBackground";

export default function LoadingLoggedInUserPage() {
  const characterContext = useContext(CharacterContext)
  return (
    <GutterBackground leftText="" rightText="" color={characterContext.characterData.color}>
      <div style={{ margin: "auto" }}>
        <div style={{ margin: "auto" }}>
          <CircularProgress style={{marginTop:"20vh"}}/>
        </div>
      </div>
    </GutterBackground>
  );
}
