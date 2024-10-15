
export const arrayUpdateList = () => {
  const formFieldUpdate = [
    {
      name: "name",
      placeholder: "Nombre",
    },
    {
      name: "price",
      placeholder: "Precio",
    },
    {
      name: "description",
      multiline: true,
      placeholder: "Descripcion",
    },
    {
      name: "brand",
      placeholder: "Marca",
    },
    {
      name: "discount",
      placeholder: "Descuento",
    }, 
  ];
  return {
    formFieldUpdate
  }
}
