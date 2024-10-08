import React from 'react'

export default function Card() {
    const products = [
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' },
        { name: 'Wireless Headphones', price: '$15.999', imageSrc: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop' }
    ]
    return (

        <>
            <section id='productos' className='pb-12 pt-8'>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Todos nuestros productos</h2>
                        <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>
                    <div className="mt-8 sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:gap-4">
                            <div className="space-y-2">
                                <div className="flex items-center mx-auto justify-center w-96">
                                    <div className="flex border w-96 mx-auto justify-center  bg-white rounded-lg  ">
                                        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                            </svg>
                                        </div>
                                        <input type="text" className="w-96 mr-6 bg-white pl-2 text-black  outline-0" placeholder="" id="" />
                                        <input type="button" value="buscar" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                                    </div>
                                </div>
                                <details
                                    className="w-96 overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]"
                                >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Categorias</span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> 0 Selected </span>

                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
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
                                </details>
                                <details
                                    className="w-96 overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker] "
                                    >
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                                    >
                                        <span className="text-sm font-medium"> Precio </span>
                                        <span className="transition group-open:-rotate-180">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <div className="border-t border-gray-200 bg-white">
                                        <header className="flex items-center justify-between p-4">
                                            <span className="text-sm text-gray-700"> The highest price is $600 </span>
                                            <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                Reset
                                            </button>
                                        </header>
                                        <div className="border-t border-gray-200 p-4 shadow-lg">
                                            <div className="flex justify-between gap-4">
                                                <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>
                                                    <input
                                                        type="number"
                                                        id="FilterPriceFrom"
                                                        placeholder="From"
                                                        className="w-full rounded-md bg-white dark:bg-slate-50 border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>
                                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                    <span className="text-sm text-gray-600">$</span>
                                                    <input
                                                        type="number"
                                                        id="FilterPriceTo"
                                                        placeholder="To"
                                                        className="w-full rounded-md bg-white dark:bg-slate-50 border-gray-200 shadow-sm sm:text-sm"
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </details>
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
        </>
    )
}
