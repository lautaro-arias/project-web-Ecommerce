
"use client";
import { useState } from "react";
import { Product } from "../interface/useInterfaceProduct";

export default function useAccionsCart() {
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddCart = (data: Product) => {
    const existingItem = cart.find((item) => item._id === data._id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === data._id
            ? { ...item, quantity: (item.quantity ?? 1) + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  const handleRemoveCart = (productId: string) => {
    setCart(cart.filter((product) => product._id !== productId));
  };

  return {
    cart,
    handleAddCart,
    handleRemoveCart,
  };
}
