import { useTheme } from "@mui/material/styles";

function getSharedStyle(props, theme) {
  return {
    display: "flex",
    height: props.small? "18px": "24px",
    backgroundColor: props.bgColor,
    borderRadius: props.box ? "2%" : "50%",
    aspectRatio: "1",
    boxShadow: "1px 1px 1px rgba(0,0,0,0.2)",
    border: props.noBorder
      ? ""
      : `1.5px solid ${theme.palette.text.veryDark} `,
    boxShadow: props.noBorder
      ? ""
      : `0px 0px 1px ${theme.palette.text.veryDark}`,
    boxSizing: "border-box",
  };
}

function TextComboButton(props) {
  let theme = useTheme();
  return (
    <div style={getSharedStyle(props, theme)}>
      <p
        style={{
          margin: "auto",
          fontSize: props.small? "60%":"75%",
          color: props.textColor,
          fontWeight: "bold",
        }}
      >
        {props.text}
      </p>
    </div>
  );
}

function GenericComboButton(props) {
  let theme = useTheme();
  let _style = getSharedStyle(props, theme);
  return <div style={_style}>{props.children}</div>;
}

export { GenericComboButton, TextComboButton };
