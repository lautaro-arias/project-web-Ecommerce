import React from 'react';
import FormField from './formField';

export default function Form() {
    return (
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
                    <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
                        <div className="w-full px-6 py-3">
                            <div>
                                <div className="mt-3 text-left sm:mt-5">
                                    <div className="inline-flex items-center w-full">
                                        <h3 className="text-lg font-bold text-neutral-600 leading-6 lg:text-3xl">Iniciar Sesion</h3>
                                    </div>
                                </div>
                            </div>
                            <FormField />
                        </div>
                        <div className="order-first hidden w-full lg:block">
                            <img
                                className="object-cover h-full bg-cover rounded-l-lg"
                                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
}
