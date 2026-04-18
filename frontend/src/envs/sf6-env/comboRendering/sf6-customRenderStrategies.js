import { ComboButtonRender } from "../../../renderStrategies/commonComboButtonRenders";
import { Typography } from "@mui/material";
import {
  GenericComboButton,
  TextComboButton,
} from "../../../components/shared/comboButton";
import LightPunch from "../images/LightPunch.png";
import HardPunch from "../images/HardPunch.png";
import MedPunch from "../images/MedPunch.png";
import LightKick from "../images/LightKick.png";
import HardKick from "../images/HardKick.png";
import MedKick from "../images/MedKick.png";
import { Stack } from "@mui/material";

class SF6ButtonRender extends ComboButtonRender {
  constructor(theme, mixin) {
    super(theme, mixin);
    this.theme = theme;
  }
  getA(small) {
    return (
      <Stack direction="row" style={{ marginRight: "8px" }}>
        <GenericComboButton  small={small}>
          <img
            src={LightPunch}
            alt="Light punch button"
            style={{ width: "100%", height: "100%", margin: "auto" }}
          />
        </GenericComboButton>
        <Typography
          style={{ margin: "auto", marginLeft: "12%", fontSize: "12px" }}
          color={this.theme.palette.text.primary}
        >
          L
        </Typography>
      </Stack>
    );
  }
  getB(small) {
    return (
      <Stack direction="row" style={{ marginRight: "6px" }}>
        <GenericComboButton  small={small}>
          <img
            src={MedPunch}
            alt="Med punch button"
            style={{ width: "100%", height: "100%", margin: "auto" }}
          />
        </GenericComboButton>
        <Typography
          style={{ margin: "auto", marginLeft: "12%", fontSize: "12px" }}
          color={this.theme.palette.text.primary}
        >
          M
        </Typography>
      </Stack>
    );
  }
  getC(small) {
    return (
      <Stack direction="row" style={{ marginRight: "6px" }}>
        <GenericComboButton  small={small}>
          <img
            src={MedKick}
            alt="Med kick button"
            style={{ width: "100%", height: "100%", margin: "auto" }}
          />
        </GenericComboButton>
        <Typography
          style={{ margin: "auto", marginLeft: "12%", fontSize: "12px" }}
          color={this.theme.palette.text.primary}
        >
          M
        </Typography>
      </Stack>
    );
  }
  getD(small) {
    return (
      <Stack direction="row" style={{ marginRight: "8px" }}>
        <GenericComboButton  small={small}>
          <img
            src={LightKick}
            alt="Light kick button"
            style={{ width: "100%", height: "100%", margin: "auto" }}
          />
        </GenericComboButton>
        <Typography
          style={{ margin: "auto", marginLeft: "12%", fontSize: "12px" }}
          color={this.theme.palette.text.primary}
        >
          L
        </Typography>
      </Stack>
    );
  }
  getRB(small) {
    return (
      <Stack direction="row" style={{ marginRight: "6px" }}>
        <GenericComboButton  small={small}>
          <img
            src={HardPunch}
            alt="Hard punch button"
            style={{ width: "100%", height: "100%", margin: "auto" }}
          />
        </GenericComboButton>
        <Typography
          style={{ margin: "auto", marginLeft: "12%", fontSize: "12px" }}
          color={this.theme.palette.text.primary}
        >
          H
        </Typography>
      </Stack>
    );
  }
  getRT(small) {
    return (
      <Stack direction="row" style={{ marginRight: "6px" }} >
        <GenericComboButton  small={small}>
          <img
            src={HardKick}
            alt="Hard kick button"
            style={{ width: "100%", height: "100%", margin: "auto" }}
          />
        </GenericComboButton>
        <Typography
          style={{ margin: "auto", marginLeft: "12%", fontSize: "12px" }}
          color={this.theme.palette.text.primary}
        >
          H
        </Typography>
      </Stack>
    );
  }
  getLB(small) {
    return (
      <TextComboButton small={small}
        box
        text={"LB"}
        bgColor={this.theme.palette.primary.main}
        textColor={"#E6E6E6"}
      ></TextComboButton>
    );
  }
  getLT(small) {
    return (
      <TextComboButton small={small}
        box
        text={"LT"}
        bgColor={this.theme.palette.primary.main}
        textColor={"#E6E6E6"}
      ></TextComboButton>
    );
  }
  getPlus(small) {
    return (
      <TextComboButton small={small}
        text={"+"}
        bgColor={this.theme.palette.primary.main}
        textColor={"#E6E6E6"}
      ></TextComboButton>
    );
  }
}

class FGNButtonRender extends ComboButtonRender {
  constructor(theme, mixin) {
    super(theme, mixin);
    this.theme = theme;
    this.sharedStyle = { margin: "auto", color: "#E6E6E6" };
  }

  getA(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> LP</p>;
  }
  getB(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> MP</p>;
  }
  getC(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> MK</p>;
  }
  getD(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> LK</p>;
  }
  getRB(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> HP</p>;
  }
  getRT(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> HK</p>;
  }
  getLB(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> DI</p>;
  }
  getLT(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> PARRY</p>;
  }
  getPlus(small) {
    return <p style={{ ...this.sharedStyle, fontSize: small ? "13px" : "16px" }}> +</p>;
  }
}
export { SF6ButtonRender, FGNButtonRender };
