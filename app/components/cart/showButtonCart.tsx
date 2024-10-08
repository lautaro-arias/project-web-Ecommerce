import { useRefModal } from '../../handlers/useRefModal'
import ListCart from './listCart'
import React from 'react'
//import { usePathname } from 'next/navigation';

export default function ShowButtonCart() {
    const { showModal, modalRef } = useRefModal()
    /*const pathname = usePathname();
    {pathname === '/' && } */

    return (
        <>
       
        <button
            onClick={showModal}
            className="inline-flex mb-4 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-md">
            carro
        </button>
       
        
        <ListCart modalRef={modalRef} />
        </>
    )
}
