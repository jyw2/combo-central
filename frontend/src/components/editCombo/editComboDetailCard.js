import { Card, FormHelperText} from "@mui/material";
import { ComboDetailType } from "../../models/Combos";
import Typography from "@mui/material/Typography";
import StringMultiSelectorField from "./dynamicFields/stringMultiSelectorField";
import StringSingleSelectorField from "./dynamicFields/stringSingleSelectorField";
import JsonSchemaUtils from "../../util/jsonSchemaUtils";
import { Stack } from "@mui/material";
import NumberField from "./dynamicFields/numberField";
import { useTheme } from "@mui/material";
import { EditComboPageContext } from "../../context/editComboPageContext";
import { useContext } from "react";
import CharacterMultiSelectorField from "./dynamicFields/characterSelectorField";

export default function EditComboDetailCard(props) {
  const { subDetails, name } = props;
  const theme = useTheme();

  const editComboPageContext = useContext(EditComboPageContext);

  // const [visibleDetails, setVisibleDetails] = useState(new Set());

  function renderField(fieldData, fieldName) {
    const path = `${name}.${fieldName}`;

    fieldName = JsonSchemaUtils.formatDetail(fieldName);

    switch (fieldData.uiType) {
      case ComboDetailType.String_Multi_Select:
        return (
          <StringMultiSelectorField
            label={fieldName}
            pool={fieldData.enum}
            path={path}
            key={path}
          ></StringMultiSelectorField>
        );
      case ComboDetailType.Char_Array:
          return (
            <CharacterMultiSelectorField
              label={fieldName}
              pool={fieldData.enum}
              path={path}
              key={path}
            ></CharacterMultiSelectorField>
          );
      case ComboDetailType.String_Single_Select:
        return (
          <StringSingleSelectorField
            label={fieldName}
            pool={fieldData.enum}
            path={path}
            key={path}
          ></StringSingleSelectorField>
        );
      case ComboDetailType.Number:
        return (
          <NumberField label={fieldName} path={path} key={path}></NumberField>
        );
      default:
        return;
    }
  }
  return (
    <Card sx={{ p: 3, overflow: "visible", position: "relative" }}>
      {/* <IconButton
        style={{
          width: "25px",
          height: "25px",
          position: "absolute",
          top: "-6px",
          right: "15px",
          backgroundColor: theme.palette.anchor.dark,
          borderRadius: "2px",
        }}
      >
        <CloseIcon></CloseIcon>
      </IconButton> */}
      <div style={{ height: "2px" }}>
        <Stack
          direction="row"
          style={{
            position: "absolute",
            top: "-15px",
            left: "15px",
          }}
        >
          <Typography
            style={{
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {name.toUpperCase()}
          </Typography>
          <FormHelperText
            align="left"
            variant="caption"
            sx={{ pl: 1, pt: "11px" }}
            style={{
              color: theme.palette.text.dark,
              fontWeight: "bold",
            }}
          >
            optional
          </FormHelperText>
        </Stack>
      </div>
      <Stack direction="row" style={{ flexWrap: "wrap" }}>
        {subDetails
          ? Object.entries(subDetails).map(
              ([subDetailName, subDetailInfo], index) => (
                <div
                  style={{ marginRight: "10px", maxWidth: "230px" }}
                  key={subDetailName}
                >
                  {renderField(subDetailInfo, subDetailName)}
                </div>
              )
            )
          : null}
      </Stack>
    </Card>
  );
}
