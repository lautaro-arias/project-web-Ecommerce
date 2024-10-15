import { useState } from "react";
import { getAuthToken } from "../../middleware/getToken";

export const useUpdateProduct = () => {
  const [initialState] = useState([
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

  const [dataUpdateProduct, setDataUpdateProduct] = useState(initialState);

  const handleInputChangeUpdate = (name: string, value: string) => {
    setDataUpdateProduct((prevState) => ({
      ...prevState,
      [name]: value,
      timestamp: new Date().toString(),
    }));
  };

  // filtramos los campos vacios
  const filterEmptyFields = (obj: {[k: string | number ]: unknown }[]) => {
    return Object.fromEntries(
      Object.entries(obj).filter(
        ([value]) =>
          value !== "" && (Array.isArray(value) ? value.length > 0 : true)
      )
    );
  };

  const dataHeader = getAuthToken();

  const handleUpdate = (_id: string) => {
    if (_id === "") return console.log("No se proporcio Id");

    if (!dataHeader) return alert("No se puede eliminar el producto: no hay token de autorización.");

    if (dataUpdateProduct === initialState) return alert("No se encontraron campos para actualizar");
  

    const filteredFormUpdate = filterEmptyFields(dataUpdateProduct);
    updateProduct(_id, filteredFormUpdate);
  };

  const updateProduct = async (_id: string,updateValue:{ [k: string | number ]: unknown }) => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_F;
    const url = `${apiUrl}/login/update/${_id}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataHeader}`,
        },
        body: JSON.stringify(updateValue),
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert(JSON.stringify(errorText, null, 2));
      }

      setDataUpdateProduct(initialState);
      
    } catch (error) {
      console.error("There was a problem with the fetch request:", error);
     // alert("Error en el servidor, por favor intente nuevamente.");
    }
  };

 

  return {
    updateProduct,
    handleInputChangeUpdate,
    dataUpdateProduct,
    handleUpdate,
  };
};
