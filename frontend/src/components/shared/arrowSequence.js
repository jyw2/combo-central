import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { ComboPieceUtil } from "util/comboPieceUtil";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { ReactComponent as ArrowStroke } from "../../images/arrow_stroke.svg";

function ArrowSequence(props) {
  const {small} = props
  const theme = useTheme();

  const iconWidth = small? "18px":"24px"

  const positionMap = {
    1: "225",
    2: "180",
    3: "135",
    4: "-90",
    5: "N",
    6: "90",
    7: "-45",
    8: "0",
    9: "45",
  };

  const [positions, chargeIndeces] = ComboPieceUtil.cleanCommand(
    props.command,
    positionMap
  );
  function renderIcon(p, index) {
    if (p === "N") {
      return (
        <p
          key={index}
          style={{ fontWeight: "bold", margin: "auto", padding: "4px" }}
        >
          N
        </p>
      );
    } else if (chargeIndeces.has(index)) {
      return (
        <ArrowStroke
          key={index}
          style={{
            transform: `rotate(${p}deg)`,
            transformOrigin: "center",
            width: iconWidth,
            height: "auto",
          }}
        />
      );
    } else {
      return (
        <Arrow
          key={index}
          style={{
            transform: `rotate(${p}deg)`,
            transformOrigin: "center",
            width: iconWidth,
            height: "auto",
          }}
        />
      );
    }
  }

  // background: theme.palette.text.primary,
  return (
    <Stack direction="row" alignItems="center">
      {positions.map((p, index) => renderIcon(p, index))}
    </Stack>
  );
}

export default ArrowSequence;
