'use client'
import React, { useState } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Lista de imágenes
  const slides = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>
                  <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas rerum quam amet provident nulla error!
                  </p>
                </header>
                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>

            {/* Contenedor del Carrusel */}
            <div className="lg:col-span-2 lg:py-8 relative">
              <img
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide}`}
                className="w-full h-96 object-cover rounded"
              />
              
              {/* Botón para ir al siguiente slide */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                ❯
              </button>

              {/* Botón para ir al slide anterior */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                ❮
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
