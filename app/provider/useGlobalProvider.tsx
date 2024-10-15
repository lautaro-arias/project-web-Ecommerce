"use client"
import React, { ReactNode, useContext } from "react";
import useGetProducts from "../login/admin/service/getProducts";
import { DataContextType } from "../context/dataContextType";
import { DataContext } from "../context/createContext";
import useAccionsCart from "../handlers/accionsCart";

export const DataGlobalProvider = ({ children }: { children: ReactNode }) => {
  
  const { data, getListProducts } = useGetProducts();
  const { cart, handleAddCart,handleRemoveCart } = useAccionsCart();

  const contextValue: DataContextType = {
    data,
    getListProducts,
    cart,
    handleAddCart,
    handleRemoveCart,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useProviderGlobal = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useProviderGlobal must be used within a DataProvider");
  }
  return context;
};
