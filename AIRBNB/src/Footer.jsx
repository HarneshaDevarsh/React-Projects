import { TfiWorld } from "react-icons/tfi";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
    return (
        <>
        <hr className="border border-gray-500"/>
            <div className='px-7 py-3 bg-gray-100'>
                <div className="flex flex-wrap gap-5 justify-between items-center">
                    <ul className='f1  flex text-xs text-gray-800'>
                        <li>© 2025 Airbnb, Inc.</li>
                        <li>ㆍ</li>
                        <li><a href="" className='hover:text-black hover:underline'>Privacy</a></li>
                        <li>ㆍ</li>
                        <li><a href="" className='hover:text-black hover:underline'>Terms</a></li>
                        <li>ㆍ</li>
                        <li><a href="" className='hover:text-black hover:underline'>Sitemaps</a></li>
                        <li>ㆍ</li>
                        <li><a href="" className='hover:text-black hover:underline'>Company Details</a></li>
                    </ul>

                    <ul className='flex gap-1 text-sm'>
                        <li><a href="" className='flex bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full'><TfiWorld className="mt-0.5 me-2" /> English (IN)</a></li>
                        <li><a href="" className='flex bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full'>₹ INR</a></li>
                        <li><a href="" className='flex bg-gray-100 hover:bg-gray-200 px-3 py-3 rounded-full'><FaFacebook /></a></li>
                        <li><a href="" className='flex bg-gray-100 hover:bg-gray-200 px-3 py-3 rounded-full'><FaXTwitter /></a></li>
                        <li><a href="" className='flex bg-gray-100 hover:bg-gray-200 px-3 py-3 rounded-full'><FaInstagram /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer