'use client'
import {  Product } from "../interface/useInterfaceProduct";
import { saveToLocalStorage, getFromLocalStorage } from "./useLocalStorage";

export default function compareData(data1: Product[], data2:Product[]) {
  if (data1.length !== data2.length) return false;

  const isEqual = (item1: Product, item2: Product) =>
    item1.name === item2.name &&
    item1.price === item2.price &&
    item1.brand === item2.brand &&
    item1.discount === item2.discount &&
    item1.serialNumber === item2.serialNumber &&
    item1.description === item2.description &&
    item1.quantity === item2.quantity

  const sortedData1 = [...data1 ].sort((a, b) =>
    a.serialNumber.localeCompare(b.serialNumber)
  );
  const sortedData2 = [...data2].sort((a, b) =>
    a.serialNumber.localeCompare(b.serialNumber)
  );

  return sortedData1.every((item1, index) =>
    isEqual(item1, sortedData2[index])
  );
}


export  function loadData (data: Product[], setData: (data: Product[]) => void) {
  try {
    const fetchedData = data;

    try {
      if (!fetchedData || fetchedData.length === 0) {
        console.error("No data fetched from API");
        return;
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }

    const storedData = getFromLocalStorage("products");
    const parsedStoredData = storedData ? JSON.parse(storedData) : null;

    if (parsedStoredData) {
      if (!compareData(fetchedData, parsedStoredData)) {
        setData(fetchedData);
        saveToLocalStorage("products", fetchedData);
        
      } else {
        setData(parsedStoredData);
      }
    } else {
      setData(fetchedData);
      saveToLocalStorage("products", fetchedData);
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
  
};


