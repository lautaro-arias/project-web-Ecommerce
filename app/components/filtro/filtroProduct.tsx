import React, { RefObject } from 'react'

export default function FilterProduct({ modalRef }: { modalRef: RefObject<HTMLDialogElement> }) {
    return (
        <dialog ref={modalRef} className="modal">
            <div
                className="relative w-screen max-w-sm border  bg-white px-4 py-8 sm:px-6 lg:px-8"
                aria-modal="true"
                role="dialog"
                tabIndex-="-1"
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
                <div className="pt-2 bg-white">
                    <header className="flex items-center justify-between p-4">
                        <span className="text-md text-gray-700"> Categorias </span>
                        <span className="text-sm text-gray-900 underline underline-offset-4">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#666666"><path d="m293.32-538.36 188.51-305.77 188.04 305.77H293.32Zm409.5 440.13q-67.33 0-113.22-46.05t-45.89-113.38q0-67.33 45.91-113.22 45.92-45.89 113.25-45.89t113.35 45.92q46.02 45.92 46.02 113.25T816.2-144.25q-46.05 46.02-113.38 46.02ZM140.6-120.8v-276.16h276.17v276.16H140.6Zm562.42-25.32q46.6 0 78.97-32.41 32.37-32.42 32.37-79.14 0-46.73-32.42-78.97t-79.14-32.24q-46.72 0-78.97 32.31-32.24 32.31-32.24 79.12 0 46.59 32.31 78.96 32.32 32.37 79.12 32.37Zm-514.53-22.56h180.39v-180.4H188.49v180.4Zm189.89-417.56h206.68L481.83-751.99 378.38-586.24Zm103.48 0ZM368.88-349.08Zm334.09 91.58Z" /></svg>
                        </span>
                    </header>
                    <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                            <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-700 cursor-pointer"> categoria 1  </span>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-700"> categoria 2 </span>
                            </label>
                        </li>
                        <li>
                            <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-700"> categoria 3  </span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="border-t border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                        <span className="text-md text-gray-700"> Rango de precio </span>
                        <span className="text-sm text-gray-900 underline underline-offset-4">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#666666"><path d="M539.53-444.64q-40.22 0-68.32-28.1-28.11-28.11-28.11-68.59 0-40.49 28.08-68.34t68.63-27.85q40.14 0 68.16 27.96 28.02 27.96 28.02 68.35 0 40.39-27.77 68.48-27.76 28.09-68.69 28.09ZM258.82-311.05q-24.63 0-42.41-17.78-17.78-17.78-17.78-42.41v-339.68q0-24.63 17.78-42.41 17.78-17.78 42.41-17.78h561.92q24.63 0 42.41 17.78 17.78 17.78 17.78 42.41v339.68q0 24.63-17.78 42.41-17.78 17.78-42.41 17.78H258.82Zm68.32-47.88h425.28q0-33.63 23.8-57.37 23.8-23.74 56.83-23.74v-202.09q-33.32 0-56.97-23.78-23.66-23.79-23.66-57.32H327.14q0 33.63-23.8 57.36-23.8 23.74-56.83 23.74v202.09q33.32 0 56.98 23.79 23.65 23.78 23.65 57.32Zm435.51 166.97H139.26q-24.63 0-42.41-17.78-17.78-17.78-17.78-42.42v-400.67h47.88v400.67q0 4.62 3.85 8.47 3.84 3.84 8.46 3.84h623.39v47.89ZM258.82-358.93h-12.31v-364.3h12.31q-5 0-8.65 3.65-3.66 3.66-3.66 8.66v339.68q0 5 3.66 8.65 3.65 3.66 8.65 3.66Z" /></svg>
                        </span>
                    </header>
                    <div className="border-t border-gray-200 p-4">
                        <div className="flex justify-between gap-4">
                            <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                    type="number"
                                    id="FilterPriceFrom"
                                    placeholder="1000"
                                    className="w-full py-1 px-2 rounded-md bg-white dark:bg-slate-50 border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                            <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                <span className="text-sm text-gray-600">$</span>
                                <input
                                    type="number"
                                    id="FilterPriceTo"
                                    placeholder="3000"
                                    className="w-full py-1 px-2  rounded-md bg-white dark:bg-slate-50 border-gray-200 shadow-sm sm:text-sm"
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mt-4 space-y-6">
                    <div className="space-y-4 text-center">
                        <a
                            href="#"
                            className="block w-64 mx-auto rounded bg-sky-600 px-4 py-3 text-sm text-gray-100 transition hover:bg-sky-500"
                        >
                            Filtrar
                        </a>
                    </div>
                </div>
            </div>
        </dialog>
    )
}