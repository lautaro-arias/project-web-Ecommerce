'use client'
import { useRefModal } from '@/app/handlers/useRefModal'
import React from 'react'
import ListCart from './listCart'
import { useProviderGlobal } from '@/app/provider/useGlobalProvider'

export default function IconCart() {
    const { showModal, modalRef } = useRefModal()
    const { cart } = useProviderGlobal()

    return (
        <>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} onClick={showModal} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm border border-red-500 indicator-item bg-red-600 dark:bg-red-500 text-white dark:text-white">{cart.length}</span>
                </div>
            </div>

        </div>
        <ListCart modalRef={modalRef} />
        </>
    )
}
