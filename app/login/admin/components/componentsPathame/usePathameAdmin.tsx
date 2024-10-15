'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import DeleteProduct from '../buttonsAction/showDeleteProduct';
import { AddProduct } from '../buttonsAction/showAddProduct';
import { UpdateProduct } from '../buttonsAction/showUpdateProduct';
import admin from '../../../../assets/admin.png'
import Image from 'next/image';

export function ButtonsPathnameAdmin({ _id }: { _id: string }) {
    const pathname = usePathname();

    return (
        <>
            {pathname === '/login/admin' &&
                <div className="flex flex-wrap items-center">
                    <div className=' mb-4'>
                        <DeleteProduct _id={_id} />
                    </div>
                    <div>
                        <UpdateProduct _id={_id} />
                    </div>
                </div>
            }
        </>
    )
}

export function NavPathnameAdmin() {
    return (
                <>
                    <div className="navbar bg-white">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <details className="group [&_summary::-webkit-details-marker]:hidden lg:hidden ">
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  bg-transparent p-2 text-gray-900"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M162.82-271.49v-32.43h634.36v32.43H162.82Zm0-192.43v-32.44h634.36v32.44H162.82Zm0-192.44v-32.44h634.36v32.44H162.82Z" /></svg>
                                    </summary>
                                    <div className="absolute left-0 mt-2  bg-white  border shadow-lg rounded-lg p-4 z-[20]">
                                        <ul className="space-y-1 ">
                                            <li>
                                                <AddProduct />
                                            </li>
                                        </ul>
                                    </div>
                                </details>
                            </div>
                            <div className='hidden md:flex'>
                                <AddProduct />
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image
                                        width={100}
                                        height={100}
                                        alt="Tailwind CSS Navbar component"
                                        src={admin} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
    )
}