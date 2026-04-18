import { SF6ButtonRender, FGNButtonRender } from "../sf6-customRenderStrategies";
import {
  PCButtonRender,
  PS4ButtonRender,
  XBOXButtonRender,
} from "../../../../renderStrategies/commonComboButtonRenders";
import { DefaultRenderMixin, FGNRenderMixin } from "../sf6-renderMixin";

class ButtonRenderProvider {
  static buttonRenderChoices = [
    "Street Fighter",
    "PC",
    "XBOX",
    "PS4",
    "Numpad Notation",
  ];
  static setButtonRenderByName(name, setButtonRender, theme) {
    switch (name) {
      case "Street Fighter":
        setButtonRender({ render: new SF6ButtonRender(theme, new DefaultRenderMixin(theme)), name });
        break;
      case "Numpad Notation":
        setButtonRender({ render: new FGNButtonRender(theme, new FGNRenderMixin()), name });
        break;
      case "PC":
        setButtonRender({ render: new PCButtonRender(theme, new DefaultRenderMixin(theme)), name });
        break;
      case "PS4":
        setButtonRender({ render: new PS4ButtonRender(theme, new DefaultRenderMixin(theme)), name });
        break;
      case "XBOX":
        setButtonRender({ render: new XBOXButtonRender(theme, new DefaultRenderMixin(theme)), name });
        break;
      default:
        setButtonRender({ render: new XBOXButtonRender(theme, new DefaultRenderMixin(theme)), name });
        break;
    }
  }

  static getButtonRenderByName(name, theme) {
    switch (name) {
      case "Street Fighter":
        return new SF6ButtonRender(theme, new DefaultRenderMixin(theme));
      case "Numpad Notation":
        return new FGNButtonRender(theme, new FGNRenderMixin());
      case "PC":
        return new PCButtonRender(theme, new DefaultRenderMixin(theme));
      case "PS4":
        return new PS4ButtonRender(theme, new DefaultRenderMixin(theme));
      case "XBOX":
        return new XBOXButtonRender(theme, new DefaultRenderMixin(theme));
      default:
        return new XBOXButtonRender(theme, new DefaultRenderMixin(theme));
    }
  }
  static getDefaultButtonRender(theme) {
    return new SF6ButtonRender(theme, new DefaultRenderMixin(theme));
  }
  static defaultButtonRenderName = "Street Fighter";
}

export { ButtonRenderProvider };
