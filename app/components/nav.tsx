'use client'
import scrollToSection from '../handlers/scrollToSection'
import { useRefModal } from '../handlers/useRefModal'
import ListCart from './cart/listCart'

export default function Nav() {
    const { showModal, modalRef } = useRefModal()

    return (
        <>
            <div className='bg-base   mx-auto '>
                <div className="navbar bg-white  mx-auto  backdrop-blur-lg  border-b  border-gray-200 p-0 fixed top-0  left-1/2 transform -translate-x-1/2 z-[10]">
                    <div className="navbar  border-b h-16 bg-white   border-gray-200  w-11/12  mx-auto max-w-5xl backdrop-blur-lg  p-0 fixed left-1/2 transform -translate-x-1/2 z-[10]">
                        <div className="navbar-start">
                            <div className="dropdown">
                            </div>
                            <button onClick={() => scrollToSection('banner')} className="btn btn-ghost ml-2"><a className='text-black dark:text-black'>Logo</a></button>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            </ul>
                        </div>
                        <div className="navbar-end">
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
                                        <span className="badge badge-sm indicator-item bg-red-600 dark:bg-red-500 text-white dark:text-white">3</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
            </div>
            <ListCart modalRef={modalRef} />
        </>
    )
}
