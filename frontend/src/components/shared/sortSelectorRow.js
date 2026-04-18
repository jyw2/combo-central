import {
  FormHelperText,
  Stack
} from "@mui/material";

export default function SortSelectorRow(props) {
  return (
    <div>
      {/* <FormHelperText
          align="left"
          variant="caption"
          style={{
            fontSize: "9px",
            color: theme.palette.text.dark,
            fontWeight: "bold",
          }}
        >
          VIEWING OPTIONS
        </FormHelperText> */}
      <Stack direction="row">
        <Stack>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Motion style
          </FormHelperText>
          <MotionRenderSelect />
        </Stack>
        <Stack>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Button style
          </FormHelperText>
          <ButtonRenderSelect />
        </Stack>
        <Stack>
          <FormHelperText
            align="left"
            variant="caption"
            style={{
              fontSize: "11px",
              paddingLeft: "2px",
              color: theme.palette.text.dark,
            }}
          >
            Direction
          </FormHelperText>
          <DirectionRenderSelect />
        </Stack>
      </Stack>
    </div>
  );
}
