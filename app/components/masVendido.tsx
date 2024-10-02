import React from 'react'
import Carousel from './carousel'
 
export default function MasVendido() {
    return (
        <section id={'masPedido'} className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-black">Lo mas pedido</h1>
                    {/*<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>*/}
                </div>
            <Carousel />
            </div>
        </section>
    )
}
