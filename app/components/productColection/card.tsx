import { Product } from '@/app/interface/useInterfaceProduct'
import React from 'react'
import AddCart from '../cart/add'
import { ButtonsPathnameAdmin } from '@/app/login/admin/components/componentsPathame/usePathameAdmin'

export default function Card({ item }: { item :Product }) {
    return (
        <div key={item._id} className="p-2 lg:w-1/3 md:w-1/2  w-full">
            <div className="flex  md:flex-row items-stretch gap-4 shadow-lg">
                <img
                    src='https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop'
                    alt={item.name}
                    className="h-52 sm:h-52 md:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="relative bg-white p-4 md:p-6 flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-700 mt-1.5">
                        {item.price}
                        <span className="text-gray-400 line-through ml-2">${item.discount}</span>
                    </p>
                    <form className="mt-4 flex justify-end">
                    <AddCart item={item} />
                    <ButtonsPathnameAdmin  _id={item._id ?? ""} />
                    </form>
                </div>
            </div>
        </div>
    )
}
