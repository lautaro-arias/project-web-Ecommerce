import React from 'react'
import arrayCard from '../utils/arrayCard'

export default function CarouselCompu() {
    const { arrayCardValores } = arrayCard()
    return (
        <div className="carousel w-full hidden md:flex">
            <div id="slide1" className="carousel-item relative w-full carousel-inner" >
                {arrayCardValores.map((item) => (
                    <div key={item.id} className="m-1 backdrop-blur-lg transition-transform transform hover:scale-105 lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img className="h-full w-full object-cover" src="https://dummyimage.com/422x262" alt="Slide 2" />

                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-white title-font text-lg font-medium">{item.title}</h2>
                            <p className="mt-1 text-gray-400 ">{item.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div id="slide2" className="carousel-item relative w-full carousel-inner" >
                {arrayCardValores.map((item) => (
                    <div key={item.id} className="m-1 backdrop-blur-lg transition-transform transform hover:scale-105 lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img className="h-full w-full object-cover" src="https://dummyimage.com/422x262" alt="Slide 2" />

                        </a>
                        <div className="mt-4 ">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ">CATEGORY</h3>
                            <h2 className="text-white title-font text-lg font-medium">{item.title}</h2>
                            <p className="mt-1 text-gray-400 ">{item.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div id="slide3" className="carousel-item relative w-full carousel-inner" >
                {arrayCardValores.map((item) => (
                    <div key={item.id} className="m-1  backdrop-blur-lg ransition-transform transform hover:scale-105 lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img className="h-full w-full object-cover" src="https://dummyimage.com/422x262" alt="Slide 2" />

                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-white title-font text-lg font-medium">{item.title}</h2>
                            <p className="mt-1 text-gray-400 ">{item.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div id="slide4" className="carousel-item relative w-full carousel-inner" >
                {arrayCardValores.map((item) => (
                    <div key={item.id} className="m-1  backdrop-blur-lg transition-transform transform hover:scale-105 lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img className="h-full w-full object-cover" src="https://dummyimage.com/422x262" alt="Slide 2" />

                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                            <h2 className="text-white title-font text-lg font-medium">{item.title}</h2>
                            <p className="mt-1 text-gray-400 ">{item.precio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
