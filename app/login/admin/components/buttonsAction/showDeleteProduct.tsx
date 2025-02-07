import { useRefModal } from '@/app/handlers/useRefModal'
import React from 'react'
import ModalDelete from '../modalAccions'

export default function DeleteProduct({ _id }: { _id: string}) {
    const {showModal,modalRef} = useRefModal()

    return ( 
        <>
            <button
                onClick={showModal}
                className="inline-flex w-full items-center gap-2 rounded border border-red-600 bg-red-500 px-3 py-2 text-white"
            >
                <span className="text-sm font-medium">Eliminar</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="#fff"
                    viewBox="0 -960 960 960"
                >
                    <path d="M284.4-144.74q-24.73 0-42.46-17.74-17.73-17.73-17.73-42.46v-528.25h-39.94v-47.71H355v-29.74h250.47v29.56H776.2v47.89h-39.93v528.34q0 24.52-17.8 42.31-17.79 17.8-42.39 17.8H284.4Zm403.98-588.45H272.09v528.25q0 5.39 3.59 8.85t8.72 3.46h391.68q4.61 0 8.46-3.84 3.84-3.85 3.84-8.47v-528.25ZM381.91-275.15h47.88v-376.71h-47.88v376.71Zm148.77 0h47.88v-376.71h-47.88v376.71ZM272.09-733.19v540.56-540.56Z" />
                </svg>
            </button>
            <ModalDelete modalRef={modalRef}  _id={_id}/>
        </>

    )
}
