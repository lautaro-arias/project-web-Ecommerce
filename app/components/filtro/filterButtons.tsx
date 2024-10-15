'use client'
import React, { useState } from 'react'
import 'animate.css';


export default function FilterButtons({ showModal }: { showModal: () => void }) {
    const [showInput, setShowInput] = useState(false);

    const toggleInput = () => {
        setShowInput(!showInput); 
    };
    return (
        <div className="mt-8 sm:flex sm:items-center sm:justify-center">
            <div className="flex sm:gap-4  justify-center text-center mx-auto">
                <div className="space-y-1 w-full ">
                    <div className="inline-flex mx-auto justify-center rounded-lg border mb-4 border-gray-100 bg-gray-100 p-1">
                        <button
                            onClick={() => showModal()}
                            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#888"><path d="M457.54-184.27q-14.86 0-25.01-9.96-10.16-9.95-10.16-24.48v-229.16L197.91-733q-10.82-13.15-2.97-27.94 7.84-14.79 24.23-14.79h521.68q16.39 0 24.23 14.79 7.83 14.79-2.99 27.94L537.63-447.87v229.16q0 14.53-10.16 24.48-10.15 9.96-25.01 9.96h-44.92ZM480-452.31l217.14-275.54H262.86L480-452.31Zm0 0Z" /></svg>


                            filtro
                        </button>

                        <button
                            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="25px" viewBox="0 -960 960 960" width="25px" fill="#888"><path d="M340.96-461.56v-302.6L218.44-641.37l-33.7-33.96 180.43-179.93 179.92 179.43-33.69 33.96-122.55-122.29v302.6h-47.89Zm253.99 356.82-179.9-179.93 33.69-33.96 122.53 122.79v-302.6h47.88v302.6l122.29-122.81 33.43 33.96-179.92 179.95Z" /></svg>

                            A-Z
                        </button>

                        <button
                            onClick={toggleInput}
                            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm  text-gray-500 hover:text-gray-70 focus:relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#888">
                                <path d="M785.27-141.63 530.5-396.5q-29.5 26.2-69.03 40-39.54 13.81-80.65 13.81-100.97 0-170.67-69.71-69.7-69.71-69.7-169.48 0-99.76 69.42-169.56 69.43-69.79 169.62-69.79 100.2 0 169.98 69.76 69.77 69.75 69.77 169.59 0 41.75-14.41 81.14-14.41 39.38-40.06 70.29l255.28 253.78-34.78 35.04ZM380.26-390.58q79.9 0 135.5-55.53 55.6-55.54 55.6-135.91 0-80.38-55.6-135.85-55.6-55.48-135.77-55.48-80.51 0-136.08 55.54-55.58 55.54-55.58 135.91t55.62 135.85q55.62 55.47 136.31 55.47Z" />
                            </svg>

                            buscar
                        </button>

                    </div>

                    {showInput ? (
                        <div
                            className="animate__animated animate__fadeIn animate__delay-900ms animate__slower shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-md"
                        >

                            <svg className="group-hover:rotate-[360deg] duration-300" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#888">
                                <path d="M785.27-141.63 530.5-396.5q-29.5 26.2-69.03 40-39.54 13.81-80.65 13.81-100.97 0-170.67-69.71-69.7-69.71-69.7-169.48 0-99.76 69.42-169.56 69.43-69.79 169.62-69.79 100.2 0 169.98 69.76 69.77 69.75 69.77 169.59 0 41.75-14.41 81.14-14.41 39.38-40.06 70.29l255.28 253.78-34.78 35.04ZM380.26-390.58q79.9 0 135.5-55.53 55.6-55.54 55.6-135.91 0-80.38-55.6-135.85-55.6-55.48-135.77-55.48-80.51 0-136.08 55.54-55.58 55.54-55.58 135.91t55.62 135.85q55.62 55.47 136.31 55.47Z" />
                            </svg>

                            <input
                                type="email"
                                name="text"
                                className="flex-1 focus:outline-none bg-white text-black"
                                placeholder="Buscar..."
                            />
                        </div>
                    ) : <div className='pt-6'></div>}

                </div>


            </div>

        </div>
    )
}
