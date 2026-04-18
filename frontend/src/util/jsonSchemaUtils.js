export default class JsonSchemaUtils {
  static setPropByPath(obj, propString, value) {
    var props = propString.split(".");

    var currentProp;
    for (var i = 0, iLen = props.length - 1; i <= iLen; i++) {
      currentProp = props[i];

      if (i === iLen) {
        obj[currentProp] = value;
      } else {
        var candidate = obj[currentProp];
        if (candidate !== undefined) {
          obj = candidate;
        } else {
          obj[currentProp] = {};
          obj = obj[currentProp];
        }
      }
    }
  }

  static getPropByString(obj, propString) {
    if (!propString || !obj) return null;

    var prop,
      props = propString.split(".");

    for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
      prop = props[i];
      var candidate = obj[prop];
      if (candidate !== undefined) {
        obj = candidate;
      } else {
        break;
      }
    }
    return obj[props[i]] === undefined ? null : obj[props[i]];
  }

  static formatDetail(detail) {
    return (detail.charAt(0).toUpperCase() + detail.slice(1)).replaceAll(
      "_",
      " "
    );
  }

  static reverseFormatDetail(detail) {
    return (detail.charAt(0).toLowerCase() + detail.slice(1)).replaceAll(
      " ",
      "_"
    );
  }
}
