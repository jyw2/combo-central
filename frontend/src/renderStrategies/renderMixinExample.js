
class RenderMixin {
    render(internalButton, small) {
        switch (internalButton) {
            case "A":
                return <TextComboButton box small={small} text={"U"} bgColor={this.theme.palette.primary.main} textColor={"#E6E6E6"}></TextComboButton>
            default:
                return null
        }
    }
}