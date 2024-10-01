import pizza from "../assets/pizza.png";
import carne from "../assets/carne.png";
import pizza2 from "../assets/pizza2.png";
import carne2 from "../assets/carne2.png";

export default function arrayCard() {
  const arrayCardValores = [
    {
      id: 1,
      title: "Hamburguesa",
      img: pizza,
      precio: "$2500",
    },
    {
      id: 2,
      title: "Hamburguesa",
      img: carne,
      precio: "$2500",
    },
    {
      id: 3,
      title: "Hamburguesa",
      img: pizza2,
      precio: "$2500",
    },
    {
      id: 4,
      title: "Hamburguesa",
      img: carne2,
      precio: "$2500",
    },
  ];

  return {
    arrayCardValores,
  };
}
