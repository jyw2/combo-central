import { createContext } from "react";

export const ToastContext = createContext({
  toastContent: "",
  setToastContent: () => null
});
