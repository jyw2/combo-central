import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Card,
  Stack,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { CharacterContext } from "context/characterContext";
import { ComboDetailsSchemaContext } from "context/comboDetailsSchemaContext.js";
import { ComboRenderContext } from "context/comboRenderContext";
import { ComboDetailType } from "models/Combos";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import JsonSchemaUtils from "util/jsonSchemaUtils";
import ChevronComboSequence from "./chevronComboSequence";
import DetailChip from "./detailChip";

function getDate(combo) {
  if (!combo?.createdDate) return "date";

  var d = new Date(combo.createdDate);

  const options = { year: "numeric", month: "short", day: "numeric" };

  const formattedDate = d.toLocaleDateString(undefined, options);

  return formattedDate;
}


export default function ComboPreviewCard(props) {
  const { combo, charId, oneLine, dark, noClick, showDetails, condensed, noBorder } = props;
  const characterContext = useContext(CharacterContext);
  const comboRenderContext = useContext(ComboRenderContext)
  const comboDetailsSchemaContext = useContext(ComboDetailsSchemaContext)

  function getUIType(detailName, detailSubTypeName) {
    return comboDetailsSchemaContext.comboDetailsSchema[detailName][detailSubTypeName].uiType;
  }

  const theme = useTheme();
  const navigate = useNavigate();
  const cardColor = dark ? "" : "";
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('sm'))

  const minTags = largeScreenSize ? 4 : 2

  function getFlatDetails() {
    if (!combo?.details) return []

    let flatDetails = []
    let index = 0
    for (let detail of Object.values(combo.details)) {
      for (let subDetail of Object.keys(detail)) {
        const detailUIType = getUIType(Object.keys(combo.details)[index], subDetail)
        const subdetailValue = detail[subDetail]
        if (typeof subdetailValue === "object") {
          if (detailUIType === ComboDetailType.Char_Array) {

            for (let subdetailValueEl of subdetailValue) {
              flatDetails.push(<DetailChip backgroundColor={characterContext.characterData.secondaryColor} prefix={JsonSchemaUtils.formatDetail(subDetail)} charIcon>{subdetailValueEl}</DetailChip>)
            }
          } else {
            for (let subdetailValueEl of subdetailValue) {
              flatDetails.push(<DetailChip backgroundColor={characterContext.characterData.secondaryColor} key={index}>
                {`${JsonSchemaUtils.formatDetail(subDetail) + " " + subdetailValueEl}`}
              </DetailChip>)
            }
          }
        } else {
          flatDetails.push(<DetailChip backgroundColor={characterContext.characterData.secondaryColor} key={index}>
            {`${JsonSchemaUtils.formatDetail(subDetail) + " " + subdetailValue}`}
          </DetailChip>)
        }
      }
      index += 1
    }
    return flatDetails
  }

  const flatDetailsLen = getFlatDetails().length

  function renderCard() {
    return (
      <Card
        sx={{
          p: 1,
          boxShadow: 4,
          cursor: noClick ? "" : "pointer",
          position: "relative",
          overflow: "hide",
          backgroundColor: cardColor,
          zIndex: 0,
          flexGrow: 1,
          overflow: "visible",
          border: noBorder ? "" : `1px solid ${theme.palette.secondary.darker}`,
          width: "100%",
          boxSizing:"border-box"
        }}

        key={combo._id}
      >
        <div style={{ height: "1px",  }}>
          <Stack
            direction="row"
            style={{
              position: "absolute",
              top: "-12px",
              left: "15px",
              width:"100%"
            }}
          >
            <Typography
              align="left"
              style={{ fontWeight: "bold", fontSize: "16px",  overflow: "hidden", textOverflow: "ellipsis", width: "95%" }}
            >
              {combo?.name?.toUpperCase() ?? "COMBO"}
            </Typography>
          </Stack>
        </div>
        <div style={{ overflow: "hidden" }}>

          <ChevronComboSequence
            oneLine={oneLine}
            comboPieces={combo?.comboPieces}
            readonly
          />

        </div>

        {showDetails ?
          <Stack direction="row" style={{ flexWrap: "wrap", padding: "1px 9px", }}>
            {(comboRenderContext.showAllTags ? getFlatDetails() : getFlatDetails().slice(0, minTags)).map((d, index) => <div key={index}>{d}</div>)}

            {!comboRenderContext.showAllTags && flatDetailsLen > minTags ?
              <DetailChip backgroundColor={characterContext.characterData.color} key={"show-all"}>
                {`+${flatDetailsLen - minTags} more`}
              </DetailChip> : null}
          </Stack> : null}

        {condensed ? null : <Stack
          direction="row"
          style={{
            // position: "absolute",
            // bottom: "-10px",
            // left: "16px",
            padding: "2px 9px",
          }}
        >
          <Stack
            direction="row"
            style={{
              // backgroundColor: characterContext.characterData.color,
              padding: "1px 2px",
            }}
            alignItems="center"
          >
            <FavoriteIcon
              style={{
                width: "12px",
                height: "12px",
                marginBottom: "2px",
                marginRight: "3px",
              }}
            />
            <Typography
              style={{ color: theme.palette.text.dark, fontSize: "12px" }}
            >
              {combo?.likes ?? 0}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            style={{
              // backgroundColor: characterContext.characterData.color,
              padding: "1px 2px",
              marginLeft: "6px",
            }}
          >
            <Typography
              style={{
                color: theme.palette.text.dark,
                opacity: "80%",
                fontSize: "12px",
              }}
            >
              {getDate(combo)}
            </Typography>
          </Stack>
        </Stack>}
      </Card>
    )
  }

  return noClick ?
    renderCard() :
    <Link to={`/combo/${charId}/${combo._id}`} style={{
      pointerEvents: noClick ? "none" : "",
      textDecoration: "none",
    }}>
      {renderCard()}
    </Link>
}
