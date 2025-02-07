import { useRefModal } from '@/app/handlers/useRefModal'
import React from 'react'
import { ModalAddProduct } from '../modalAccions'

export const AddProduct = () => {
  const { showModal, modalRef } = useRefModal()

  return (
    <>
      <button
        onClick={showModal}
        className="inline-flex mb-4 text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-md">
          <small className=" hidden md:flex">Añadir Producto</small>
          <small className=" flex md:hidden">Añadir</small>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M244.88-104.74q-24.55 0-42.34-17.8-17.8-17.79-17.8-42.31v-471.72q0-24.52 17.8-42.32 17.79-17.79 42.43-17.79h91.35v-14.87q0-60.19 41.96-101.95 41.95-41.76 101.93-41.76 59.98 0 102.04 41.82 42.06 41.81 42.06 101.89v14.87h90.79q24.57 0 42.36 17.79 17.8 17.8 17.8 42.32v471.72q0 24.52-17.8 42.31-17.79 17.8-42.34 17.8H244.88Zm.06-47.89h470.12q4.62 0 8.47-3.84 3.84-3.85 3.84-8.47v-471.55q0-4.61-3.84-8.46-3.85-3.84-8.47-3.84H624.2V-553q0 10.25-7.01 17.23t-17.31 6.98q-10.3 0-16.93-6.98-6.63-6.98-6.63-17.23v-95.79H384.2V-553q0 10.25-7.01 17.23t-17.31 6.98q-10.3 0-16.93-6.98-6.63-6.98-6.63-17.23v-95.79h-91.38q-4.62 0-8.47 3.84-3.84 3.85-3.84 8.46v471.55q0 4.62 3.84 8.47 3.85 3.84 8.47 3.84ZM384.2-696.68h192.12v-14.87q0-40.4-27.87-68.11-27.88-27.71-68.36-27.71-40.49 0-68.19 27.75-27.7 27.75-27.7 68.07v14.87ZM232.63-152.63V-648.79v496.16Z" /></svg>
          
          </button>
      
      <ModalAddProduct modalRef={modalRef} />
    </>
  )
}
