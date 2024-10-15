import { useState } from "react";
import { Product } from "../../../interface/useInterfaceProduct";
import { getAuthToken } from "../../middleware/getToken";

export const useAddProduct = () => {
  const [initialState] = useState<Product[]>([
    {
      name: "",
      description: "",
      price: 0,
      brand: "",
      discount: "",
      serialNumber: "",
      quantity: 0
    },
  ]);

  const [dataProduct, setDataProduct] = useState(initialState);

  const handleChangeAddProduct = (name: string, value: string | number) => {
    setDataProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //obtenemos el token
    const dataHeader = getAuthToken();
  //

  const handleAddProduct = () => {
    if (!dataHeader) return alert("No hay token de autorización, por favor inicia sesión.");

    if (dataProduct === initialState) return alert("No se encontraron campos para añadir");

    addProduct(dataProduct);
  };


  const addProduct = async (data: Product[]) => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_F;
    const url = `${apiUrl}/login/add`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataHeader}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(JSON.stringify(errorData.error, null, 2))
      }

      setDataProduct(initialState);

    } catch (error) {
      console.error("There was a problem with the fetch request:", error);
     // alert("Error en el servidor, por favor intente nuevamente.");
      throw error;
    }
  };
 
  return {
    addProduct,
    handleChangeAddProduct,
    dataProduct,
    setDataProduct,
    handleAddProduct,
  };
};
