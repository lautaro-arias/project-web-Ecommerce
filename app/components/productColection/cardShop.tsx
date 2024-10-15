'use client'
import React from 'react'
import { useRefModal } from '../../handlers/useRefModal'
import FilterProduct from '../filtro/filtroProduct'
import FilterButtons from '../filtro/filterButtons'
import useGetProducts from '../../login/admin/service/getProducts'
import Card from './card'
import { usePathname } from 'next/navigation'

export default function CardShop() {
  const { data } = useGetProducts();
  const { showModal, modalRef } = useRefModal()
  const pathname = usePathname();
  return (

    <>
      <section id='productos' className='pb-12 pt-8'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {pathname !== '/login/admin' &&
            <>
              <header className="text-center">
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
                <p className="mx-auto mt-4 max-w-md text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                  dicta incidunt est ipsam, officia dolor fugit natus?
                </p>
              </header>
            </>
          }
          <FilterButtons showModal={showModal} />
          <div className="container px-5 py-24 mx-auto justify-center align-center">
            <div className="flex flex-wrap ">
              {data.map((item) => (
                <Card
                  key={item._id}
                  item={item}
                />
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
