'use client'
import {  useEffect, useState } from "react";
import { loadData } from "../../../storage/useCompareData";
import { Product } from "../../../interface/useInterfaceProduct";

export default function useGetProducts() {
  const [data, setData] = useState<Product[]>([]);

  const getListProducts = async () => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_F || "https://api-almacen-productos.onrender.com";
    const url = `${apiUrl}/list`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(JSON.stringify(errorData.error, null, 2))
      }

      const fetchedData = await response.json();
      loadData(fetchedData, setData)

    } catch (error) {
      //alert("Error en el servidor, por favor intente nuevamente.");
      console.log(error);
    }
  };
  

  useEffect(() => {
    getListProducts();
  }, []);

  return {
    getListProducts,
    data,
  };
}
