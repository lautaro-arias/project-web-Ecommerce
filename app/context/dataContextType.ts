import { Product } from "../interface/useInterfaceProduct";

export interface DataContextType {
  data: Product[];
  getListProducts: () => void;
  cart: Product[];
  handleAddCart: (product: Product) => void;
  handleRemoveCart: (productId: string) => void;
}
