export default class ObjectUtils {
  static removeEmptyProperties(obj) {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === "") {
        delete obj[key];
      } else if (typeof obj[key] === "object") {
        this.removeEmptyProperties(obj[key]);
        if (Object.keys(obj[key]).length === 0) {
          delete obj[key];
        }
      }
    }
    return obj;
  }

  static hasValue(obj) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "string" && obj[key].trim() !== "") {
          return true;
        } else if (this.hasValue(obj[key])) {
          return true;
        }
      }
    }
    return false;
  }
}
