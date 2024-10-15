'use client'
import { arrayAddList } from '../../../utils/arrayAddValores';
import React, { RefObject } from 'react'
import FormField from './formInputs';
import { arrayUpdateList } from '../../../utils/arrayUpdateValores';
import useDeleteProducts from '@/app/login/admin/service/deleteProducts';
import { useAddProduct } from '@/app/login/admin/service/addProduct';
import { useUpdateProduct } from '@/app/login/admin/service/updateProduct';
import { useProviderGlobal } from '@/app/provider/useGlobalProvider';

export function ModalAddProduct({ modalRef }:{ modalRef:RefObject<HTMLDialogElement> }) {

    const { formFieldAdd } = arrayAddList();
    const { handleChangeAddProduct,handleAddProduct, dataProduct } = useAddProduct();
    const { getListProducts } = useProviderGlobal();

    const handleTime = () => {
        setTimeout(() => {
            getListProducts()
        },2000)
    }

    return (
        <dialog ref={modalRef} className="modal"  >
            <div className="modal-box  bg-white">
                <h3 className="text-lg   font-bold">Añadir Producto </h3>
                {formFieldAdd.map((item: { name: string; placeholder: string; }, index) => (
                    <FormField
                        key={index}
                        field={item}
                        onChangeText={handleChangeAddProduct}
                        value={(dataProduct[item.name as keyof typeof dataProduct] || "") as string}
                    />
                ))}
                <p className="py-4 font-light text-green-700">Desea añadir este producto </p>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={() => { handleAddProduct() ; handleTime() } } className="btn  hover:bg-green-500  bg-green-600 mr-2  text-white">Añadir</button>
                        <button className="btn hover:bg-orange-500 hover:text-white border-orange-300 bg-white text-orange-500">Cancelar</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
export function ModalUpdate({ modalRef, _id}:{ modalRef:RefObject<HTMLDialogElement>,_id:string }) {
    const { formFieldUpdate } = arrayUpdateList();
    const { handleInputChangeUpdate,dataUpdateProduct,handleUpdate } = useUpdateProduct();
    const { getListProducts } = useProviderGlobal();

    const handleTime = () => {
        setTimeout(() => {
            getListProducts()
        },2000)
    }

    return (
        <dialog ref={modalRef} className="modal">
            <div className="modal-box bg-white">
                <h3 className="text-lg font-bold">Actualizar </h3>
                {formFieldUpdate.map((item: { name: string; placeholder: string; }, index) => (
                    <FormField 
                    key={index} 
                    field={item}
                    value={(dataUpdateProduct[item.name as keyof typeof dataUpdateProduct] || "") as string}
                    onChangeText={handleInputChangeUpdate} />
                ))}
                <p className="py-4 text-sky-600 font-light">Desea actualizar este proyecto</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={() => { handleUpdate(_id); handleTime() }} className="btn  hover:bg-sky-500  bg-sky-600 mr-2  text-white">Aceptar</button>
                        <button className="btn hover:bg-orange-500  hover:text-white border-orange-300 bg-white text-orange-500">Cancelar</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default function ModalDelete({ modalRef,_id }:{ modalRef:RefObject<HTMLDialogElement>,_id:string }) {
    const { handleDelete } = useDeleteProducts();
    const { getListProducts } = useProviderGlobal();
    
    const handleTime = () => {
        setTimeout(() => {
            getListProducts()
        },500)
    }

    return (
        <dialog ref={modalRef} className="modal">
            <div className="modal-box">
                <h3 className="text-lg font-bold">Eliminar </h3>
                <p className="py-4">Desea eliminar este producto</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={() => {handleDelete(_id) ; handleTime()}} className="btn  hover:bg-red-500  bg-red-600 mr-2  text-white">Eliminar</button>
                        <button className="btn hover:bg-orange-400 hover:text-white border-orange-300 bg-white text-orange-500">Cancelar</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}