import React from 'react';

export default function FormField ({ field,onChangeText, value }: {
    field: { name: string; placeholder: string; },
    onChangeText: (name: string, value: string) => void,
    value: string
}) {
    return (
        <div>
            <label
                htmlFor={field.placeholder}
                className="relative  mt-6 bg-white  block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
                <input
                    className="peer ml-2 mt-2 w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                    placeholder={field.placeholder}
                    value={value || ""}
                    onChange={(text) => onChangeText(field.name, text.target.value)}
                    type={'text'}
                />

                <span
                    className=" rounded-lg pointer-events-none absolute text-md start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                    {field.placeholder}
                </span>
            </label>
        </div>
    );
};