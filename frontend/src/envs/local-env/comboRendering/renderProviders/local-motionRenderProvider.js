import Pad from "../../../../components/shared/pad";
import ArrowSequence from "../../../../components/shared/arrowSequence";
import FGNMotion from "../../../../components/shared/fgnMotion";

class MotionRenderProvider {
  static motionRenderChoices = [
    "Animated Joystick",
    "Arrows",
    "Numpad Notation",
  ];
  static getMotionRenderByName(name, theme, props, small, medium) {
    switch (name) {
      case "Animated Joystick":
        return <Pad {...props} small={small} medium={medium} />;
        break;
      case "Arrows":
        return <ArrowSequence {...props} small={small} medium={medium} />;
        break;
      case "Numpad Notation":
        return <FGNMotion {...props} small={small} medium={medium} ></FGNMotion >;
    }
  }
  static defaultMotionRenderName = "Arrows";
}

export { MotionRenderProvider };
