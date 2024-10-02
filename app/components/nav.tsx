'use client'
//import React, { useEffect, useState } from 'react'
import scrollToSection from '../handlers/scrollToSection'

export default function Nav() {

    // const [bgColor, setBgColor] = useState('bg-black');
    // const [textColor, setTextColor] = useState('text-white');

    /* const handleScroll = () => {
         const sections = document.querySelectorAll('section');
         const scrollPosition = window.scrollY;
 
         sections.forEach(section => {
             const sectionTop = section.offsetTop;
             const sectionHeight = section.clientHeight;
 
             if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                 if (section.classList.contains('transparent')) {
                     setBgColor('bg-transparent');
                     setTextColor('text-white');
                 }  else {
                     setBgColor('bg-white');
                     setTextColor('text-black');
                 }
 
                 if (section.classList.contains('white')) {  
                         setBgColor('bg-white');
                         setTextColor('text-black')
                 }
             }
         });
     };
     useEffect(() => {
         window.addEventListener('scroll', handleScroll);
         return () => {
             window.removeEventListener('scroll', handleScroll);
         };
         
     }, []);*/

    return (
        <>
            <div className='  mx-auto '>
                <div className={`navbar bg-white  dark:bg-black p-0 fixed top-0  left-1/2 transform -translate-x-1/2 z-[1]`}>
                    <div className={`navbar  bg-white   dark:bg-black max-w-screen-xl  md:rounded-full  p-0 fixed top-0  left-1/2 transform -translate-x-1/2 z-[1]`}>
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="ml-2 dark:bg-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a >Categoria</a>
                                        <ul className="p-2">
                                            <button onClick={() => scrollToSection('masPedido')} className="btn btn-ghost">
                                                <a >Lo mas pedido</a>
                                            </button>
                                        </ul>
                                    </li>
                                    <li>
                                        <button onClick={() => scrollToSection('contacto')} className="btn btn-ghost">
                                            <a >Contacto</a>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => scrollToSection('productos')} className="btn btn-ghost">
                                            <a >Productos</a>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <button onClick={() => scrollToSection('banner')} className="btn btn-ghost ml-2"><a>Logo</a></button>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {/*<button onClick={() => scrollToSection('')} className="btn btn-ghost"><a></a></button>*/}
                                <li className='mt-2 font-bold '>
                                    <details>
                                        <summary>Categorias</summary>
                                        <ul className="p-2 dark:bg-white">
                                            <li><button onClick={() => scrollToSection('masPedido')} className="btn btn-ghost">
                                                <a >Lo mas pedido</a>
                                            </button>
                                            </li>
                                            {/*<li><a></a></li>*/}
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <button onClick={() => scrollToSection('productos')} className="btn btn-ghost"><a>Productos</a></button>

                                </li>
                                <li>
                                    <button onClick={() => scrollToSection('contacto')} className="btn btn-ghost">
                                        <a>Contacto</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-end">

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <input type='text' className='input input-bordered' placeholder='buscar' />
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">buscar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
