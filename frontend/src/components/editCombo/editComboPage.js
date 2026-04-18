import { useState } from "react";
import { CharacterContext } from "../../context/characterContext.js";
import GutterBackground from "../shared/gutterBackground.js";
import { characterData } from "../../util/envResolverUtilEs6.js";
import { useParams } from "react-router-dom";
import { EditComboPageContext } from "../../context/editComboPageContext.js";
import EditComboForm from "./editComboForm.js";
import { useEffect, useContext } from "react";

function EditComboPage() {
  let { editType, charId, } = useParams();
  const [original, setOriginal] = useState({});
  const [presets, setPresets] = useState({});

  useEffect(() => {
    document.title = `${editType === "create" ? "Create" : "Edit"} Combo`;
  }, []);

  const characterContext = useContext(CharacterContext)
  useEffect(() => {
    characterContext.setCharacterData(characterData[charId])
  }, [charId])


  const editComboPageContext = {
    draftDetails: original.details ?? {},
    original,
    setOriginal,
    presetActions: presets,
    setPresets,
  };
  return (
    <EditComboPageContext.Provider value={editComboPageContext}>
      <GutterBackground
        leftText={characterContext.characterData.name}
        rightText="Creating Combo"
        color={characterContext.characterData.color}
      >
        <EditComboForm key={editType}></EditComboForm>
      </GutterBackground>
    </EditComboPageContext.Provider>
  );
}

export default EditComboPage;
