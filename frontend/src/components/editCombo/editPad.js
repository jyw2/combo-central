import { Checkbox, FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function EditPad(props) {

    let padCircum = 150
    let padRadius = padCircum / 2
    let circleCircum = padCircum / 4
    let circleRadius = circleCircum / 2

    const positionMap = {
        "1": { top: padCircum - 1.75 * circleRadius, left: 0, transform: "rotate(-135deg)" },
        "2": { top: padCircum - circleRadius / 2, left: padRadius - circleRadius, transform: "rotate(-180deg)" },
        "3": { top: padCircum - 1.75 * circleRadius, left: padCircum - 2 * circleRadius, transform: "rotate(135deg)" },
        "4": { top: padRadius - circleRadius / 2, left: 0 - circleRadius, transform: "rotate(-90deg)" },
        "5": { top: padRadius - circleRadius, left: padRadius - circleRadius },
        "6": { top: padRadius - circleRadius / 2, left: padCircum - circleRadius, transform: "rotate(90deg)" },
        "7": { top: 0 + 0.75 * circleRadius, left: 0, transform: "rotate(-45deg)" },
        "8": { top: 0 - circleRadius / 2, left: padRadius - circleRadius },
        "9": { top: 0 + 0.75 * circleRadius, left: padCircum - 2 * circleRadius, transform: "rotate(45deg)" },
    }
    const centerStyle = {
        width: circleCircum,
        height: circleCircum,
        borderRadius: "50%",
        position: "absolute",
        backgroundColor: "rgba(200, 200, 200,1)",
    }
    const wrapperStyle = {
        width: circleCircum,
        height: circleCircum,
        minWidth: "0px",
        borderRadius: "4%",
        backgroundColor: " rgba(200, 200, 200,0.5)",
        position: "absolute",
        left: -circleCircum / 2,
        top: -circleCircum / 4,
        zIndex: 2,
    }
    const centerWrapperStyle = {
        width: circleCircum,
        height: circleCircum,
        minWidth: "0px",
        borderRadius: "4%",
        backgroundColor: " rgba(200, 200, 200,0.5)",
        position: "absolute",
        left: 0,
        zIndex: 2,
    }
    //https://css-tricks.com/snippets/css/css-triangle/
    const sharedDirectionStyle = {
        width: 0,
        height: 0,
        position: "absolute",
        borderLeft: `${circleCircum / 2}px solid transparent`,
        borderRight: `${circleCircum / 2}px solid transparent`,
        borderBottom: `${circleCircum / 2}px solid rgba(200, 200, 200,1)`,
        margin: "auto",
        zIndex: 3,
    }

    const [chargeDirections, setChargeDirections] = useState(false)

    return (
        <Stack>
            <FormControlLabel control={<Checkbox checked={chargeDirections} onClick={() => { setChargeDirections(!chargeDirections) }} />} label={<Typography style={{ fontSize: "12px" }}>Hold (Charge) selected direction</Typography>} />
            <div style={{ margin: `${circleCircum}px`, marginLeft: "auto", marginRight: "auto", width: `${padCircum}px`, height: `${padCircum}px`, borderRadius: "50%", position: "relative" }}>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["1"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}1${ chargeDirections? "]":""}`) }} /></div>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["2"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}2${ chargeDirections? "]":""}`) }} /></div>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["3"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}3${ chargeDirections? "]":""}`) }} /></div>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["4"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}4${ chargeDirections? "]":""}`) }} /></div>
                <div style={{ ...centerStyle, ...(positionMap["5"]) }} >  <Button style={{ ...centerWrapperStyle }} />
                    <Button style={{ ...centerWrapperStyle }} onClick={() => { props.setCommand(props.command + `5`) }} /></div>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["6"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}6${ chargeDirections? "]":""}`) }} /></div>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["7"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}7${ chargeDirections? "]":""}`) }} /></div>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["8"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}8${ chargeDirections? "]":""}`) }} /></div>
                <div style={{ ...sharedDirectionStyle, ...(positionMap["9"]) }} >  <Button style={{ ...wrapperStyle }} />
                    <Button style={{ ...wrapperStyle }} onClick={() => { props.setCommand(props.command + `${chargeDirections? "[":""}9${ chargeDirections? "]":""}`) }} /></div>
            </div>
            <Button size="small" style={{ backgroundColor: "black" }} variant="contained" onClick={() => { props.setCommand("") }}>Reset</Button>
        </Stack >
    )
}

export default EditPad