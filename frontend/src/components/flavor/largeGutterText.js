import React from 'react';
import { useTheme } from '@mui/material/styles'

export default function GutterText(props) {

    const theme = useTheme();
    return (
        <div style={{
            marginTop: 0,
            // border: "solid",
            width: "400px", position: "relative", overflow: "hidden", transform: `${props.flip ? "scaleX(-1)" : ""}`
        }}>
            {/* <p style={{
                width: "20px",
                transform: `rotate(90deg)  ${props.flip ? "scaleY(-1)" : ""} `,
                fontSize: "300px", fontWeight: "bold", letterSpacing: "-20px", whiteSpace: "nowrap",
                position: "absolute", left: "120px", top: "-250px", textAlign: "left", margin: 0, padding: 0,
                color: theme.palette.anchor.mediumDark,
                textShadow: " 1 1 1px black, 1 1 1px black, 1 1 1px black, 1 1 1px black"
            }}>{props.flip ? props.text.split("").reverse().join("") : props.text}</p>
            <p style={{
                width: "20px",
                transform: `rotate(90deg)  ${props.flip ? "scaleY(-1)" : ""} `,
                fontSize: "300px", fontWeight: "bold", letterSpacing: "-20px", whiteSpace: "nowrap",
                position: "absolute", left: "180px", top: "-250px", textAlign: "left", margin: 0, padding: 0,
                color: theme.palette.anchor.medium,
                textShadow: " 1 1 1px black, 1 1 1px black, 1 1 1px black, 1 1 1px black"
            }}>{props.flip ? props.text.split("").reverse().join("") : props.text}</p> */}
            <p style={{
                width: "20px",
                transform: `rotate(90deg)  ${props.flip ? "scaleY(-1)" : ""} `, color: theme.palette.background.dark,
                fontSize: "300px", fontWeight: "bold", letterSpacing: "-20px", whiteSpace: "nowrap",
                position: "absolute", left: "220px", top: "-250px", textAlign: "left", margin: 0, padding: 0,
            }}>{props.flip ? props.text.split("").reverse().join("") : props.text}</p>

        </div >
    )
}