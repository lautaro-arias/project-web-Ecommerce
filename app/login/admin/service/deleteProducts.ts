import { getAuthToken } from '../../middleware/getToken';

export default function useDeleteProducts() {
  const dataHeader = getAuthToken();
  
  const handleDelete = (_id: string) => {
    if (!_id) return console.error("ID no proporcionado");;
    if (!dataHeader) {
      console.error("No hay token de autorización");
      alert("No se puede eliminar el producto: no hay token de autorización.");
      return;
    }

    deleteProduct(_id);
  };

  const deleteProduct = async (_id: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_F
    const url = `${apiUrl}/login/delete/${_id}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${dataHeader}`, 
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert(JSON.stringify(errorText, null, 2))
      }

    } catch  {
      console.error("There was a problem with the fetch request:");
      //alert("Error en el servidor, por favor intente nuevamente.");
    }
  };


  return {
    handleDelete,
  };
}