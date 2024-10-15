import { useRefModal } from '@/app/handlers/useRefModal'
import React from 'react'
import { ModalUpdate } from '../modalAccions'

export const UpdateProduct = ({ _id }: { _id: string}) => {
  const { showModal, modalRef } = useRefModal()

    return (
        <>
        <button
            onClick={showModal}
            className="inline-flex w-full items-center gap-2 rounded border border-sky-600 bg-sky-500 px-2 py-2 text-white "
        >
            <span className="text-sm font-medium">Actualizar</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="#fff"
                viewBox="0 -960 960 960"
            >
                <path d="M192.63-192.63h42.2l449.32-448.94-42.17-42.17-449.35 448.88v42.23Zm-47.89 47.89v-109.61l546.7-547.21q6.68-5.87 15.46-9.58 8.78-3.7 18.48-3.7 9.23 0 18.03 3.49 8.81 3.5 16.42 9.99l42.14 42.37q6.57 6.86 9.93 15.81 3.36 8.96 3.36 17.74 0 9.75-3.45 18.62-3.45 8.87-9.87 15.53L254.35-144.74H144.74Zm622.61-581.07-41.13-40.87 41.13 40.87ZM663.07-662.4l-21.09-21.34 42.17 42.17-21.08-20.83Z" />
            </svg>
        </button>
        <ModalUpdate modalRef={modalRef}   _id={_id} />
        </>
    )

}
