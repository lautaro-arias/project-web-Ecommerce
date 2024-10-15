'use client';
import React, { RefObject } from 'react';
import CartItem from './cartItem';
import { useProviderGlobal } from '@/app/provider/useGlobalProvider';
import { getWhatsAppLink } from '@/app/handlers/wsapMessage';

export default function ListCart({ modalRef }:{ modalRef:RefObject<HTMLDialogElement> }) {
    const { cart, handleRemoveCart } = useProviderGlobal();

    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;
    const whatsappLink = getWhatsAppLink(cart, phoneNumber);

    return (
        <dialog ref={modalRef} className=" modal ">
                <div
                    className="relative w-screen max-w-sm border  bg-white px-4 py-8 sm:px-6 lg:px-8"
                    aria-modal="true"
                    role="dialog"
                >
                    <form method="dialog">
                        <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                            <span className="sr-only">Close cart</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </form>

                    <div className="mt-4  space-y-6 max-h-[50vh] overflow-y-auto">
                        {cart.map((item) =>
                            <CartItem
                                key={item._id}
                                item={item}
                                onRemove={() => handleRemoveCart(item._id ?? "")}
                            />
                        )}
                        {cart.length === 0 &&
                            <h1 className="text-center text-2xl text-gray-500">No hay productos</h1>
                        }
                        <div className="space-y-4 text-center">
                            <li
                                
                                className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
                            >
                                View my cart ({cart.length})
                            </li>


                            <a href={`${whatsappLink}`} target="_blank" className="block justify-center mx-auto rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
                                Envia a nuestro WhatsApp
                            </a>

                            <form method="dialog">
                                <button

                                    className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                                >
                                    Continue shopping
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
        </dialog>
    );
}
