import React from 'react'
import { FaMagnifyingGlass, FaBars } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";


function Navbar() {
    return (
        <>
            <div className='navbar min-h-10 items-center py-5 z-10 w-full fixed top-0'>
                <div className='nav flex items-center justify-between w-[94%] mx-auto'>
                    <div className='nav_01'>
                        <a href=""><FaBars /></a>

                        <div className='nav_02'>
                            <ul>
                                <li><a href="">Brand</a></li>
                                <li><a href="">Masterpieces</a></li>
                                <li><a href="">Jewellery Wedding</a></li>
                                <li><a href="">Occasions</a></li>
                                <li><a href="">Golden Programms</a></li>
                                <li><a href="">Store</a></li>
                            </ul>
                        </div>
                    </div>

                    <img src="https://s7ap1.scene7.com/is/content/noveljewelsprod/Indriya-Logo?ts=1747986052050&dpr=off" alt="" />

                    <div className='nav_0 flex'>
                        <ul className='flex gap-7'>
                            <li><a href="" className='li_1 text-blue-800 font-semibold hover:text-blue-900'>Brand</a>
                                <ul className='nav_1'>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>About Indriya </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>From The House of Birla </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Design & Craftmanships </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>The Indriya Women </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>An Ode To India </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>The Indriya Promises </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Indriya Policies </a></li>
                                </ul>
                            </li>

                            <li><a href="" className='li_1 text-blue-800 font-semibold hover:text-blue-900'>Masterpieces</a>
                                <ul className='nav_1'>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Vanjyotsana </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Garden of Imotions </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Lush Golds </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Anantra </a></li>
                                </ul>
                            </li>

                            <li><a href="" className='li_1 text-blue-800 font-semibold hover:text-blue-900'>Jewellery</a>
                                <ul className='nav_1'>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Earings </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Rings </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Neckless </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Bangless </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Mangalsutra </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Pendants </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Bracelets </a></li>
                                </ul>
                            </li>

                            <li><a href="" className='li_1 text-blue-800 font-semibold hover:text-blue-900'>Weddings</a>
                                <ul className='nav_1'>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Engagement </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Sangeet </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Mahendi </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Wedding Day </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Reception </a></li>
                                </ul>
                            </li>

                            <li><a href="" className='li_1 text-blue-800 font-semibold hover:text-blue-900'>Occasions</a>
                                <ul className='nav_1'>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Daily Wear </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Elivated Essentials </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Light Occasion </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Heavy Occasion </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Bridal Wear </a></li>
                                    <li><a href="" className='text-blue-800 hover:text-blue-900 hover:underline transition-all'>Akshay Tritiya </a></li>
                                </ul>
                            </li>

                            <li><a href="" className='li_1 text-blue-800 font-semibold hover:text-blue-900'>Golden Programs</a></li>
                            <li><a href="" className='li_1 text-blue-800 font-semibold hover:text-blue-900'>Stores</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className='flex gap-5'>
                            <a href=""><li className='text-blue-800 hover:text-blue-900'><FaMagnifyingGlass /></li></a>
                            <a href=""><li className='text-blue-800 hover:text-blue-900'><IoPerson /></li></a>
                            <a href=""><li className='text-blue-800 hover:text-blue-900'><FaHeart />  </li></a>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='rate top-[82%] left-[88%]  fixed z-10 '>
                <h2 className='bg-white px-2 py-1 rounded-sm font-semibold text-blue-800 text-xs'>Today's Gold Rate</h2>
                <img src="https://www.indriya.com/content/dam/noveljewels/websites/images/footer/gold-rate-icon.svg" className='w-[50px] mt-2 mx-auto' alt="" />
            </div>
        </>
    )
}

export default Navbar