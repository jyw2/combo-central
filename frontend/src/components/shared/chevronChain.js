import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Chevron from "./chevron";

export default function ChevronChain(props) {
  const { col, grow, forceChevronOnSingleItem } = props
  function renderChevron(child, index) {
    return <Chevron
      grow={grow}
      primaryColor={props.primaryColor}
      secondaryColor={props.secondaryColor}
      index={index}
      height={props?.height}
      clickcallback={child.props.disabled || !child.props.clickcallback ? () => { } : child.props.clickcallback}
      max={forceChevronOnSingleItem && props.content.length === 1 ? 2 : props.content.length - 1}
      key={index}
    >
      {child}
    </Chevron>
  }

  return (
    <Stack
      direction={col ? "column" : "row"}
      sx={{
        flexWrap: props.noWrap ? "" : "wrap",
        pl: `${props?.height / 2}px`,
        // height: `${props?.height}px`,
      }}
      style={{ pointerEvents: props.readonly ? "none" : "" }}
    >
      {props?.content?.map((child, index) => {
        return (
          child.props.url ?
            <Link to={child.props.url} key={index} >
              {renderChevron(child, index)}
            </Link> : renderChevron(child, index)
        );
      })}
    </Stack>
  );
}
