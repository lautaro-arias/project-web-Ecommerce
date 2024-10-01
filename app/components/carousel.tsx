'use client'
import React, { useState } from 'react'
import CarouselCompu from './carrouselCompu';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 4; // Número total de slides

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            <CarouselCompu />
            <div className="carousel md:hidden w-full overflow-hidden relative">
                <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {/* Slide 1 */}
                    <div id="slide1" className="carousel-item w-full flex-shrink-0 flex justify-center items-center">
                        <div className="transition-transform transform hover:scale-105 p-4 w-full max-w-sm">
                            <a className="block relative h-48 w-full rounded overflow-hidden">
                                <img className="h-full w-96 object-cover " src="https://dummyimage.com/422x262" alt="Slide 1" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-white title-font text-lg font-medium">1</h2>
                                <p className="mt-1 text-gray-400">1</p>
                            </div>
                        </div>
                    </div>
                    {/* Slide 2 */}
                    <div id="slide2" className="carousel-item w-full flex-shrink-0 flex justify-center items-center">
                        <div className="transition-transform transform hover:scale-105 p-4 w-full max-w-sm">
                            <a className="block relative h-48 w-full rounded overflow-hidden">
                                <img className="h-full w-96 object-cover" src="https://dummyimage.com/422x262" alt="Slide 2" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-white title-font text-lg font-medium">2</h2>
                                <p className="mt-1 text-gray-400">2</p>
                            </div>
                        </div>
                    </div>
                    {/* Slide 3 */}
                    <div id="slide3" className="carousel-item w-full flex-shrink-0 flex justify-center items-center">
                        <div className="transition-transform transform hover:scale-105 p-4 w-full max-w-sm">
                            <a className="block relative h-48 w-full rounded overflow-hidden">
                                <img className="h-full w-96 object-cover" src="https://dummyimage.com/422x262" alt="Slide 3" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-white title-font text-lg font-medium">3</h2>
                                <p className="mt-1 text-gray-400">3</p>
                            </div>
                        </div>
                    </div>
                    {/* Slide 4 */}
                    <div id="slide4" className="carousel-item w-full flex-shrink-0 flex justify-center items-center">
                        <div className="transition-transform transform hover:scale-105 p-4 w-full max-w-sm">
                            <a className="block relative  h-48 w-full rounded overflow-hidden">
                                <img className="h-full w-96 object-cover" src="https://dummyimage.com/422x262" alt="Slide 4" />
                            </a>
                            <div className="mt-4 text-center">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-white title-font text-lg font-medium">4</h2>
                                <p className="mt-1 text-gray-400">4</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botones de navegación */}
                <div className="absolute top-1/2 left-7 right-7 transform -translate-y-1/2 flex justify-between">
                    <button onClick={prevSlide} className="btn btn-circle">❮</button>
                    <button onClick={nextSlide} className="btn btn-circle">❯</button>
                </div>
            </div>
        </>
    );
}
