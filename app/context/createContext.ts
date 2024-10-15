import { createContext } from "react";
import { DataContextType } from "./dataContextType";

export const DataContext = createContext<DataContextType>({
  data: [],
  getListProducts: () => {},
  cart: [],
  handleAddCart: () => {},
  handleRemoveCart: () => {},
});
