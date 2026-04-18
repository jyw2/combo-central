import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    Card,
    Stack,
    Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { CharacterContext } from "context/characterContext";
import { ComboRenderContext } from "context/comboRenderContext.js";
import { useContext } from "react";
import ComboPreviewCard from "../comboPreviewCard.js";
import DetailChip from "../detailChip.js";
import OverflowCard from "../overflowCard.js";

function getDate(combo) {
    if (!combo?.createdDate) return "date";

    var d = new Date(combo.createdDate);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = d.toLocaleDateString(undefined, options);

    return formattedDate;
}

export default function ComboSetPreviewCard(props) {
    const { comboSet, charId } = props
    const theme = useTheme()
    const  characterContext = useContext(CharacterContext);
    const largeScreenSize = useMediaQuery(theme.breakpoints.up('sm'))
    const minTags = largeScreenSize ? 4 : 2
    const comboRenderContext = useContext(ComboRenderContext)

    return (
        <OverflowCard
            onClick={() => { }}
            title={comboSet.name?.toUpperCase() ?? "COMBO SET"}
            key={comboSet._id}
            light
        >
            <Stack
                sx={{ m: 1 }}
                direction="row"
                style={{ overflow: "hide", position: "relative" }}
            >
                {comboSet.firstThreeCombos.map((combo) => (
                    <div style={{ overflow: "visible", width: "30%" }} key={combo._id}>
                        <Stack
                            style={{
                                width: "120%",
                            }}
                        >
                            <ComboPreviewCard
                                dark
                                combo={combo}
                                charId={charId}
                                oneLine
                                noClick
                                condensed
                                noBorder
                            ></ComboPreviewCard>
                        </Stack>
                    </div>
                ))}
                {comboSet.comboIds.length > 3 ? <Card sx={{ p: { xs: "10px", sm: "20px" } }} style={{ zIndex: 5, }}>
                    <Stack justifyContent="center" style={{ height: "100%" }}><Typography>+{comboSet.comboIds.length - 3}</Typography></Stack>
                </Card> : null}
            </Stack>
            <Stack
                direction="row"
                style={{
                    padding: "4px 11px",
                }}
            >
                {(comboRenderContext.showAllTags ? comboSet?.tags : comboSet?.tags.slice(0, minTags)).map(
                    (d, index) => <DetailChip backgroundColor={characterContext.characterData.secondaryColor} key={index}>{d}</DetailChip>
                )}

                {!comboRenderContext.showAllTags && comboSet?.tags?.length > minTags ?
                    <DetailChip backgroundColor={characterContext.characterData.color} key={"show-all"}>
                        {`+${comboSet?.tags?.length - minTags} more`}
                    </DetailChip> : null}
            </Stack>
            <Stack
                direction="row"
                style={{
                    // position: "absolute",
                    // bottom: "-10px",
                    // left: "16px",
                    padding: "1px 11px",
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
                        {comboSet?.likes}
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    style={{
                        // backgroundColor: characterContext.characterData.color,
                        padding: "1px 2px",
                        marginLeft: "10px",
                    }}
                    alignItems="center"
                >
                    <Typography
                        style={{
                            color: theme.palette.text.dark,
                            opacity: "80%",
                            fontSize: "12px",
                            marginRight: "10px",
                        }}
                    >
                        {getDate(comboSet)}
                    </Typography>
                    <Typography
                        style={{
                            color: theme.palette.text.dark,
                            opacity: "80%",
                            fontSize: "14px",
                            fontWeight: "bold"
                        }}
                    >
                        {comboSet.comboIds.length} combo
                        {comboSet.comboIds.length === 1 ? "" : "s"}{" "}
                    </Typography>
                </Stack>
            </Stack>
        </OverflowCard>
    )
}