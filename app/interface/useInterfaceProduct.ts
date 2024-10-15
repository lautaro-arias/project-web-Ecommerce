export interface Product {
  _id?           : string;
  name          : string;
  description?  : string;
  price         : number;
  brand         : string;
  discount?     : string;
  serialNumber  : string;
  timestamp?    : string;
  __v?          : number;
  quantity      : number;
}

export interface ItemProduct {
  item          : Product
}