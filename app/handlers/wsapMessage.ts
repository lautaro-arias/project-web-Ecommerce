import { Product } from "../interface/useInterfaceProduct";

export const getWhatsAppLink = (cart: Product[], phoneNumber: string) => {
    const message = generateWhatsAppMessage(cart);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
};

export const generateWhatsAppMessage = (cart:Product[]) => {
    const cartItems = cart
        .map(item =>
            `*Producto:* ${item.name}\n*Cantidad:* ${item.quantity}\n*price:* $${item.price}`
        )
        .join('\n\n');

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return `🛒 *Tu carrito de compras:*\n\n${cartItems}\n\n*Total:* $${total.toFixed(2)}`;
};

