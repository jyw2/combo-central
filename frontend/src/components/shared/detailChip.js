
import { Avatar } from "@mui/material";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import { ComboPieceUtil } from "util/comboPieceUtil";
import {rootPath} from "../../util/envResolverUtilEs6"

export default function DetailChip(props) {
    const theme = useTheme();

    const { children, backgroundColor, charIcon, prefix } = props

    const resolvedPrefix = prefix ? prefix + " " : ""
    return <Chip
        size="small"
        label={charIcon ? resolvedPrefix + ComboPieceUtil.formatDetail(children) : resolvedPrefix + children}
        sx={{ mx: 1 }}
        style={{
            borderRadius: "3px",
            backgroundColor: backgroundColor,
            color: theme.palette.text.secondary,
            margin: "2px",
        }}
        avatar={charIcon ? <Avatar alt={children} src={require(`../../${rootPath}/images/${children}-chip-icon.png`)} /> : null}
    />
}