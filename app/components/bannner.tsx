import React from 'react';

export default function Banner() {
  return (
    <>
      <section
        id="banner"
        className="relative mt-12 h-64 md:h-96 justify-center bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-center bg-no-repeat max-h-screen-sm bg-cover"
      >
        <div className="absolute inset-0 bg-gradient-to-b" ></div>
        <div className="py-24 relative ">
          <div className="mx-auto flex w-full text-left">
            <div className="relative mx-auto inline-flex items-center align-middle">
             {/* <div className="pb-12 text-center">
                <h1 className="mb-8 flex max-w-4xl mx-auto justify-center text-lg font-semibold leading-none tracking-tight text-gray-800 md:text-xl lg:max-w-3xl">
                  ¿Qué estás buscando?
                </h1>
                <label className="input input-bordered flex items-center dark:bg-white gap-2">
                  <input type="text" className="grow dark:bg-white" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="dark:fill-gray-400"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </div>*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
