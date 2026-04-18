import React from 'react';
import { TextComboButton, GenericComboButton } from '../components/shared/comboButton'
import { useTheme } from '@mui/material/styles'
import { ReactComponent as PS4Triangle } from '../images/PS4_triangle.svg';
import { ReactComponent as PS4Cross } from '../images/PS4_cross.svg';

class ComboButtonRender {
    constructor(theme, renderMixin = null) {
        this.theme = theme
        this.renderMixin = renderMixin
    }
    render(internalButton, small = false) {
        switch (internalButton) {
            case "A":
                return this.getA(small);
            case "B":
                return this.getB(small);
            case "C":
                return this.getC(small);
            case "D":
                return this.getD(small);
            case "RB":
                return this.getRB(small);
            case "RT":
                return this.getRT(small);
            case "LB":
                return this.getLB(small);
            case "LT":
                return this.getLT(small);
            case "+":
                return this.getPlus(small);
            default:
                return this?.renderMixin?.render(internalButton, small) ?? null
        }
    }
}

class PCButtonRender extends ComboButtonRender {
    constructor(theme, mixin) {
        super(theme, mixin)
        this.theme = theme
    }
    getA(small) {
        return <TextComboButton box small={small} text={"U"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getB(small) {
        return <TextComboButton box small={small} text={"I"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getC(small) {
        return <TextComboButton box small={small} text={"K"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getD(small) {
        return <TextComboButton box small={small} text={"J"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getRB(small) {
        return <TextComboButton box small={small} text={"O"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getRT(small) {
        return <TextComboButton box small={small} text={"L"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getLB(small) {
        return <TextComboButton box small={small} text={"Y"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getLT(small) {
        return <TextComboButton box small={small} text={"H"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getPlus(small) {
        return <TextComboButton box small={small} text={"+"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
}

class PS4ButtonRender extends ComboButtonRender {
    constructor(theme, mixin) {
        super(theme, mixin)
        this.theme = theme
    }
    getA(small) {
        return <GenericComboButton small={small} bgColor={this.theme.palette.primary.main}>
            <div style={{ border: "1px solid #E39BC9", width: "35%", height: "35%", margin: "auto" }}></div>
        </GenericComboButton>
    }
    getB(small) {
        return <GenericComboButton small={small} bgColor={this.theme.palette.primary.main}>
            <PS4Triangle style={{ width: "60%", height: "60%", margin: "auto", paddingBottom: "14%" }}></PS4Triangle>
        </GenericComboButton>
    }
    getC(small) {
        return <GenericComboButton small={small} bgColor={this.theme.palette.primary.main}>
            <div style={{ border: "1px solid #FF8275", borderRadius: "50%", width: "40%", height: "40%", margin: "auto" }}></div>
        </GenericComboButton>
    }
    getD(small) {
        return <GenericComboButton small={small} bgColor={this.theme.palette.primary.main}>
            <PS4Cross style={{ width: "40%", height: "40%", margin: "auto" }} />
        </GenericComboButton>
    }
    getRB(small) {
        return <TextComboButton small={small} box text={"RB"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getRT(small) {
        return <TextComboButton small={small} box text={"RT"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getLB(small) {
        return <TextComboButton small={small} box text={"LB"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getLT(small) {
        return <TextComboButton small={small} box text={"LT"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getPlus(small) {
        return <TextComboButton small={small} text={"+"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
}

class XBOXButtonRender extends ComboButtonRender {
    constructor(theme, mixin) {
        super(theme, mixin)
        this.theme = theme
    }
    getA(small) {
        return <TextComboButton text={"X"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#009BCE"}></TextComboButton>
    }
    getB(small) {
        return <TextComboButton text={"Y"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#EFD100"}></TextComboButton>
    }
    getC(small) {
        return <TextComboButton text={"B"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#D34A40"}></TextComboButton>
    }
    getD(small) {
        return <TextComboButton text={"A"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#84B65F"}></TextComboButton>
    }
    getRB(small) {
        return <TextComboButton box text={"RB"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getRT(small) {
        return <TextComboButton box text={"RT"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getLB(small) {
        return <TextComboButton box text={"LB"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getLT(small) {
        return <TextComboButton box text={"LT"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
    getPlus(small) {
        return <TextComboButton text={"+"} small={small} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
    }
}

export { ComboButtonRender, PCButtonRender, PS4ButtonRender, XBOXButtonRender }