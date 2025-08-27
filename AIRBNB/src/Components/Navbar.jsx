import React from 'react'
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

function Navbar() {
  return (
    <>
    <div className='bg-linear-to-b from-white to-gray-100 w-full fixed top-0 shadow-lg'>
        <div className='navbar flex justify-between w-[96%] mx-auto min-h-14 py-6 items-center'>
            <div className=''>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" className='h-10' alt="" />
            </div>

            <div className='nav_1'>
                <div className='min-h-4 bg-white border border-gray-300 hover:shadow-md px-3 py-2 rounded-full'>
                    <ul className='flex justify-between gap-4 items-center'>
                        <li className=''>🏡 Anywhere</li>
                        <li className='text-gray-300 text-2xl'> | </li>
                        <li className=''>Anytime</li>
                        <li className='text-gray-300 text-2xl'> | </li>
                        <li className=''>Add Guest</li>
                        <li className='bg-red-400 items-center p-2 text-white rounded-full'><FaMagnifyingGlass /></li>
                    </ul>
                </div>
            </div>

            <div className='nav_2'>
                <ul className='flex gap-1 items-center'>
                    <li className='px-3 py-2 rounded-full hover:bg-gray-200 cursor-pointer'>Become a host</li>

                    <li className='bg-gray-200 p-2 text-black rounded-full hover:scale-130 me-1'><a href=""><TfiWorld /></a></li>
                    <li className='bg-gray-200 p-2 text-black rounded-full hover:scale-130 ms-1'><a href=""><FaBars /></a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar