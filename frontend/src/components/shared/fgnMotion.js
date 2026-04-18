import { useTheme } from "@mui/material/styles";

function FGNMotion(props) {
  const { small } = props;
  const theme = useTheme();
  return (
    <p
      style={{
        fontWeight: "bold",
        margin: "auto",
        padding: "4px",
        fontSize: small ? "14px" : "16px",
      }}
    >
      {props.command}
    </p>
  );
}

export default FGNMotion;
