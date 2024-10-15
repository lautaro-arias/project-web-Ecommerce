'use client'
import React from 'react'
import scrollToSection from '../../handlers/scrollToSection'
import IconCart from '../cart/iconCart'

export default function Nav() {
    return (
        <>
            <div className='bg-base   mx-auto '>
                <div className="navbar bg-white  mx-auto  backdrop-blur-lg  border-b  border-gray-200 p-0 fixed top-0  left-1/2 transform -translate-x-1/2 z-[10]">
                    <div className="navbar  border-b h-16 bg-white   border-gray-200    w-11/12  mx-auto max-w-5xl backdrop-blur-lg  p-0 fixed left-1/2 transform -translate-x-1/2 z-[10]">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <details className="group [&_summary::-webkit-details-marker]:hidden lg:hidden ">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  bg-transparent p-2 text-gray-900"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M162.82-271.49v-32.43h634.36v32.43H162.82Zm0-192.43v-32.44h634.36v32.44H162.82Zm0-192.44v-32.44h634.36v32.44H162.82Z" /></svg>
                                    </summary>

                                    <div className="absolute left-0 mt-2  bg-white shadow-lg rounded-lg p-4 z-[20]">
                                        <ul className="space-y-1">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#666666"><path d="M244.88-104.74q-24.55 0-42.34-17.8-17.8-17.79-17.8-42.31v-471.72q0-24.52 17.8-42.32 17.79-17.79 42.43-17.79h91.35v-14.87q0-60.19 41.96-101.95 41.95-41.76 101.93-41.76 59.98 0 102.04 41.82 42.06 41.81 42.06 101.89v14.87h90.79q24.57 0 42.36 17.79 17.8 17.8 17.8 42.32v471.72q0 24.52-17.8 42.31-17.79 17.8-42.34 17.8H244.88Zm.06-47.89h470.12q4.62 0 8.47-3.84 3.84-3.85 3.84-8.47v-471.55q0-4.61-3.84-8.46-3.85-3.84-8.47-3.84H624.2V-553q0 10.25-7.01 17.23t-17.31 6.98q-10.3 0-16.93-6.98-6.63-6.98-6.63-17.23v-95.79H384.2V-553q0 10.25-7.01 17.23t-17.31 6.98q-10.3 0-16.93-6.98-6.63-6.98-6.63-17.23v-95.79h-91.38q-4.62 0-8.47 3.84-3.84 3.85-3.84 8.46v471.55q0 4.62 3.84 8.47 3.85 3.84 8.47 3.84ZM384.2-696.68h192.12v-14.87q0-40.4-27.87-68.11-27.88-27.71-68.36-27.71-40.49 0-68.19 27.75-27.7 27.75-27.7 68.07v14.87ZM232.63-152.63V-648.79v496.16Z" /></svg>
                                                    <span onClick={() => scrollToSection('productos')} className="text-sm font-medium"> Productos </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="size-5 opacity-75"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                        />
                                                    </svg>
                                                    <span onClick={() => scrollToSection('contacto')} className="text-sm font-medium"> Contacto </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                            <button onClick={() => scrollToSection('banner')} className="btn btn-ghost ml-2"><a className='text-black dark:text-black'>Logo</a></button>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <IconCart />
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
            </div>
        </>
    )
}


