import { createContext } from "react";

export const ComboDetailsSchemaContext = createContext({
  comboDetailsSchema: "",
  setComboDetailsSchema: () => null,
  errorLoadingSchema: false,
  setErrorLoadingSchema: () => null
});
