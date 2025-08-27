import { FaFilter } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { TbExchange } from "react-icons/tb";

function Products() {
    const jewellery = [
        {
            id: 1,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/GTAYB00-AQED377",
            title: "Priyali Gold Drop Earrings",
            price: "₹44,439.00"
        },
        {
            id: 2,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEMRL50-AANL790",
            title: "Kailani Diamond Necklace",
            price: "₹13,00,259.00"
        },
        {
            id: 3,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/JTQYS20-APTL007",
            title: "Manibandh Gold Mangalsutra Bracelet",
            price: "₹1,27,598.00"
        },
        {
            id: 4,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/JTLYG20-BJBR082",
            title: "Shriya Gold Bangle",
            price: "₹2,60,894.00"
        },
        {
            id: 5,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/JTLYG20-BJBR077",
            title: "Aastha Gold Bangle",
            price: "₹4,07,707.00"
        },
        {
            id: 6,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/HTLYGU3-BRBR416",
            title: "Zareen Diamond Bangle",
            price: "₹3,88,328.00"
        },
        {
            id: 7,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/GTLYG00-APBR869",
            title: "Rajamanjari Gold Bangle",
            price: "₹3,38,380.00"
        },
        {
            id: 8,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/GTKYG00-APBR869",
            title: "Alankrit Swarna Gold Bangle",
            price: "₹3,25,130.00"
        },
        {
            id: 9,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEMRA70-APBR843",
            title: "Rosy Radiance Diamond Bangle",
            price: "₹2,18,844.00"
        },
        {
            id: 10,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEKRA40-APBR839",
            title: "Roohina Diamond Bangle",
            price: "₹2,90,345.00"
        },
        {
            id: 11,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/PMTWA40-APTG095",
            title: "Anchorline Platinum Bracelet",
            price: "₹3,23,033.00"
        },
        {
            id: 12,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/TELRL40-APMB327",
            title: "Sacred Sparkle Diamond Mangalsut...",
            price: "₹94,302.00"
        },
        {
            id: 13,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/OEAYA80-ANNC777",
            title: "Noor Bridal Gold Necklace",
            price: "₹13,94,244.00"
        },
        {
            id: 14,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEDRA40-AANN832",
            title: "Geometric Prism Diamond Necklace",
            price: "₹1,15,321.00"
        },
        {
            id: 15,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DELRL40-APMB326",
            title: "Blooming Grace Diamond Mangalsut...",
            price: "₹69,053.00"
        },
        {
            id: 16,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEKRA40-APBR844",
            title: "Amelia Diamond Bangle",
            price: "₹2,52,023.00"
        },
        {
            id: 17,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEMYA40-APBR847",
            title: "Soleia Diamond Bangle",
            price: "₹3,10,709.00"
        },
        {
            id: 18,
            image: "https://s7ap1.scene7.com/is/image/noveljewelsprod/DEMYA40-APBR846",
            title: "Naida Diamond Bangle",
            price: "₹2,64,927.00"
        },
    ]
  return (
    <>
    <div className="products py-25">
        <div className="w-[95%] mx-auto min-h-10">
            <div>
                <ul className="flex gap-2">
                    <li className="text-md text-gray-500">Home</li>
                    <li className="text-md text-gray-500"> / </li>
                    <li><a href="" className="text-md text-gray-500 hover:underline underline-offset-4 hover:font-bold">Jewellery </a></li>
                </ul>

                <hr className="mt-5 mb-5 border-1 border-yellow-600"/>

                <div className="icons flex gap-4 items-center">
                    <a href="" className="icon"><FaFilter /></a>
                    <a href=""><p>Sort & Filter</p></a>
                </div>

                <h1 className="font-semibold mt-10 mb-5 text-gray-700">5039 Products Found</h1>
            </div>


            <div className="flex flex-wrap justify-items-start">
                {jewellery.map((jewellery) =>(
                    <div key={jewellery.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
                        <div className="img_1 p-3 rounded-xl">
                            <img src={jewellery.image} className="rounded-xl w-full transition-all hover:scale-110" alt="" />
                        </div>

                        <div className="mt-3">
                            <h1><a href="" className="font-semibold text-[18px]">{jewellery.title}</a></h1>
                            <h1><a href="" className="font-semibold text-[18px]">{jewellery.price}</a> <span>(Approx)</span></h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mx-auto text-center mt-15">
                <img src="https://s7ap1.scene7.com/is/content/noveljewelsprod/Loder-gazelle?dpr=on&ts=1735887895087" className="w-[100px] mx-auto" alt="" />
                
                <p className="text-gray-600 text-xl">There are more 4999 products waiting for your glimpse</p>

                <button className="button px-6 py-2 text-lg font-semibold rounded-xs border mt-5">View More</button>
            </div>


            <div className="mt-10 text-center">
                <h1 className="font-semibold text-2xl">The Indriya <i className="font-mono">Promises</i></h1>

                <div className="mt-10 flex flex-wrap gap-15">
                    <div className="flex flex-col sm:flex-row items-start w-full sm:w-[45%] lg:w-[30%]">
                        <a href="" className="text-6xl mt-3 text-red-600"><GrCertificate /></a>

                        <div className="text-left ms-5">
                            <h6 className="text-blue-900 font-semibold text-lg">Trusted & Certified Jewellery</h6>
                            <p className="text-gray-600">Crafted with the trust and reliability of the Aditya Birla Group, we use BIS Hallmark gold and certified natural diamonds for all our products.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start w-full sm:w-[45%] lg:w-[30%]">
                        <a href="" className="text-6xl mt-3 text-red-600"><FaHandHoldingHeart /></a>

                        <div className="text-left ms-5">
                            <h6 className="text-blue-900 font-semibold text-lg">Fair & Transparent Pricing</h6>
                            <p className="text-gray-600">We offer a price breakup of each jewellery piece, reflecting the true cost of the materials and the craftsmanship behind it.</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start w-full sm:w-[45%] lg:w-[30%]">
                        <a href="" className="text-6xl mt-3 text-red-600"><TbExchange /></a>

                        <div className="text-left ms-5">
                            <h6 className="text-blue-900 font-semibold text-lg">Hassle-free Exchanges</h6>
                            <p className="text-gray-600">'No Questions Asked' return, and lifetime exchange & buyback, ensuring complete satisfaction. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products