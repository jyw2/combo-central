import { TextComboButton } from "components/shared/comboButton";

class DefaultRenderMixin {
    constructor(theme) {
        this.theme = theme
    }

    render(internalButton, small) {
        switch (internalButton) {
            case "P":
                return <TextComboButton box small={small} text={"P"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
            case "K":
                return <TextComboButton box small={small} text={"K"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
            case "PP":
                return <TextComboButton box small={small} text={"PP"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
            case "KK":
                return <TextComboButton box small={small} text={"KK"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
            default:
                return null
        }
    }
}

class FGNRenderMixin {
    render(internalButton, small) {
        switch (internalButton) {
            case "P":
                return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> P </p>;
            case "K":
                return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> K </p>;
            case "PP":
                return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> PP </p>;
            case "KK":
                return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> KK </p>;
            default:
                return null
        }
    }
}

export { DefaultRenderMixin, FGNRenderMixin }