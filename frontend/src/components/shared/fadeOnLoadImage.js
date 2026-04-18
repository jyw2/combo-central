import { Fade, Stack } from "@mui/material";
import { useState } from "react";

export default function FadeOnLoadImage(props) {
    const [loaded, setLoaded] = useState(false)
    const { placeholderColor, cover } = props

    return (
        <Stack style={{ padding: 0, margin: 0, height: "100%", width: "100%" }}>
            < Fade in={loaded} timeout={600} style={{ padding: 0, margin: 0, height: "100%", width: "100%" }}>
                <Stack style={{ padding: 0, margin: 0, height: "100%", width: "100%" }}>
                    {!cover ? <img {...props} onLoad={() => setLoaded(true)} /> :
                        <img {...props} onLoad={() => setLoaded(true)} style={{ objectFit: "cover" }} />}

                </Stack>
            </Fade >
            {/* <Stack style={{ backgroundColor: placeholderColor ?? "transparent", height: "100%", width: "100%" }} /> */}
        </Stack>
    )
}