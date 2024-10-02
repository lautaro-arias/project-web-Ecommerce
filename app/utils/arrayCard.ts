import pizza from "../assets/pizza.png";
import carne from "../assets/carne.png";
import pizza2 from "../assets/pizza2.png";
import carne2 from "../assets/carne2.png";

export default function arrayCard() {
  const arrayCardValores = [
    {
      id: 1,
      title: "nombre de producto",
      img: pizza,
      precio: "$precio",
    },
    {
      id: 2,
      title: "nombre de producto",
      img: carne,
      precio: "$precio",
    },
    {
      id: 3,
      title: "nombre de producto",
      img: pizza2,
      precio: "$precio",
    },
    {
      id: 4,
      title: "nombre de producto",
      img: carne2,
      precio: "$precio",
    },
  ];

  return {
    arrayCardValores,
  };
}
