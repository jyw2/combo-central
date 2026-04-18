export default class ComboRenderUtil {
  static IconSizeMap = {
    text: "15px",
    regular: "24px",
    small: "20px",
  };

  static getPxSize(name) {
    if (!name) return this.IconSizeMap["regular"];
    return this.IconSizeMap[name];
  }

  static ComboSize = {
    EXTRA_SMALL: "extra-small",
    SMALL: "small",
    REGULAR: "regular",
    LARGE: "large",
  }
}
