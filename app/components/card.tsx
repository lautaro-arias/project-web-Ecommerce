'use client'
import React from 'react'
import { useRefModal } from '../handlers/useRefModal'
import FilterProduct from './filtro/filtroProduct'

export default function Card() {
    const products = [
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' }
    ]
    const { showModal, modalRef } = useRefModal()
    return (

        <>
            <section id='productos' className='pb-12 pt-8'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                        <p className="mx-auto mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>
                    <div className="mt-8 sm:flex sm:items-center sm:justify-center">
                        <div className="sm:flex sm:gap-4">
                            <div className="space-y-2 w-full max-w-md mx-auto">
                                <div className="flex items-center justify-center w-full">
                                    <div className='inline-flex me-3 md:me-0'>
                                        <button className="inline-flex px-4 mb-4 mt-4 w-full bg-sky-600 p-2 rounded-lg text-white  hover:bg-sky-500 transition-colors" onClick={() => showModal()}>
                                            Ver filtros
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M457.54-184.27q-14.86 0-25.01-9.96-10.16-9.95-10.16-24.48v-229.16L197.91-733q-10.82-13.15-2.97-27.94 7.84-14.79 24.23-14.79h521.68q16.39 0 24.23 14.79 7.83 14.79-2.99 27.94L537.63-447.87v229.16q0 14.53-10.16 24.48-10.15 9.96-25.01 9.96h-44.92ZM480-452.31l217.14-275.54H262.86L480-452.31Zm0 0Z" /></svg>
                                        </button>
                                    </div>
                                    <div className='inline-flex me-3 md:me-0'>
                                        <button className="inline-flex ml-4 mb-4 mt-4 w-full bg-sky-600 p-2 rounded-lg text-white  hover:bg-sky-500 transition-colors">
                                            Ordenar <small className="mt-1 ml-1 font-bold">A - Z</small>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" height="25px" viewBox="0 -960 960 960" width="25px" fill="#fff"><path d="M340.96-461.56v-302.6L218.44-641.37l-33.7-33.96 180.43-179.93 179.92 179.43-33.69 33.96-122.55-122.29v302.6h-47.89Zm253.99 356.82-179.9-179.93 33.69-33.96 122.53 122.79v-302.6h47.88v302.6l122.29-122.81 33.43 33.96-179.92 179.95Z" /></svg>
                                        </button>
                                    </div>
                                    <div className="inline-flex">
                                        <details className="dropdown dropdown-left dropdown-bottom bg-transparent text-transparent">
                                            <summary className=" bg-transparent text-transparent cursor-pointer">
                                                <div className="border bg-sky-600 rounded-lg ml-4 mb-6 hover:bg-sky-500 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff">
                                                        <path d="M785.27-141.63 530.5-396.5q-29.5 26.2-69.03 40-39.54 13.81-80.65 13.81-100.97 0-170.67-69.71-69.7-69.71-69.7-169.48 0-99.76 69.42-169.56 69.43-69.79 169.62-69.79 100.2 0 169.98 69.76 69.77 69.75 69.77 169.59 0 41.75-14.41 81.14-14.41 39.38-40.06 70.29l255.28 253.78-34.78 35.04ZM380.26-390.58q79.9 0 135.5-55.53 55.6-55.54 55.6-135.91 0-80.38-55.6-135.85-55.6-55.48-135.77-55.48-80.51 0-136.08 55.54-55.58 55.54-55.58 135.91t55.62 135.85q55.62 55.47 136.31 55.47Z" />
                                                    </svg>
                                                </div>
                                            </summary>
                                            <div className='ml-12 flex mx-auto justify-center items-center w-full'>
                                                <div className="pl-12 dropdown-content text-transparent bg-transparent rounded z-[1] m-2 mb-4 ">
                                                    <div className="pl-2.5 pr-4 flex justify-center relative items-center w-full mb-4 bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg">
                                                        <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#888">
                                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            className="flex w-[280px] md:w-96 pl-8 pr-4 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
                                                            placeholder="Buscar..."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container px-5 py-24 mx-auto justify-center align-center">
                        <div className="flex flex-wrap ">
                            {products.map((product, index) => (
                                <div key={index} className="p-2 lg:w-1/3 md:w-1/2  w-full">
                                    <div className="flex  md:flex-row items-stretch gap-4 shadow-lg">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.name}
                                            className="h-52 sm:h-52 md:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="relative bg-white p-4 md:p-6 flex-1">
                                            <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                                            <p className="text-gray-700 mt-1.5">
                                                {product.price}
                                                <span className="text-gray-400 line-through ml-2">$80</span>
                                            </p>
                                            <form className="mt-4 flex justify-end">
                                                <button className="block w-full md:w-auto rounded bg-black px-4 py-3 text-sm font-medium text-white transition hover:scale-105">
                                                    Add
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='mb-12'>
                        <button className="cursor-pointer group relative flex justify-center mx-auto gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="30px" fill="#fff"><path d="M456.32-775.26v498.94L218.71-514.19 184.74-480 480-184.74 775.26-480l-33.97-34.19L504.2-276.32v-498.94h-47.88Z" /></svg>
                            Ver mas
                            <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                                Ver mas
                            </div>
                        </button>
                    </div>
                </div>
            </section>
            <FilterProduct modalRef={modalRef} />
        </>
    )
}
