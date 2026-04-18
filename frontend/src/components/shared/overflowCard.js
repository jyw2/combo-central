import { Card, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const emptyFunction = () => {};
export default function OverflowCard(props) {
  const { title, onClick, noCorners, light } = props;
  const theme = useTheme();

  return (
    <Card
      onClick={onClick ?? emptyFunction}
      sx={{
        mt: 2,
        p: 1,
        pt: 2,
        boxShadow: 4,
        cursor: onClick ? "pointer" : "",
        position: "relative",
        overflow: "visible",
        borderRadius: noCorners ? "0" : "",
        backgroundColor: light ? theme.palette.anchor.mediumDark : "",
  
      }}
    >
      <div style={{ position: "absolute", top: "-10px", left: "10px", width:"100%" }}>
        <Typography style={{ fontWeight: "bold", overflow: "hidden", textOverflow: "ellipsis", width: "95%", textAlign: "left" }}>{title}</Typography>
      </div>
      {props.children}
    </Card>
  );
}
