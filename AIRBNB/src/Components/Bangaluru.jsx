import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Bangaluru() {
    const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/c389f712-5665-4b38-b83b-29f9b8fd73d0.jpeg?im_w=960",
            title: "Apartment in Bengaluru",
            price: "₹2,965 for 2 nights",
            rating: 5,
        },

        {
            id: 2,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=960",
            title: "Apartment in Koramangala",
            price: "₹6,504 for 2 nights",
            rating: 4.92,
        },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1387305711375650999/original/25df853c-6c64-4726-bcd4-3ede539fb84b.jpeg?im_w=960",
            title: "Home in Bengaluru",
            price: "₹3,503 for 2 nights",
            rating: 5,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1388874919578557652/original/02e8c4e2-e9b9-48d1-b7e0-71dd0c39e5f6.jpeg?im_w=960",
            title: "Hotel in Bengaluru",
            price: "₹1,998 for 2 nights",
            rating: 4.75,
        },
    ]
    return (
        <>
            <div className=" py-4">
                <div className="w-[96%] mx-auto min-h-60">
                    <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                        <h1 className="flex">
                            Stay in Begaluru
                            <FaGreaterThan className="mt-1 ms-1" />
                        </h1>
                    </a>

                    <div className="flex flex-wrap justify-items-start">
                        {homes.map((home) => (
                            <div key={home.id} className="w-full sm:w-1/2 lg:w-1/4 p-3">
                                <img src={home.image} alt={home.title} className="rounded-xl h-50 w-full" />

                                <div className="mt-2">
                                    <h1>
                                        <a href="#" className="text-lg hover:text-red-500"> {home.title} </a>
                                    </h1>

                                    <p className="flex text-sm font-light text-gray-500"> {home.price}
                                        <a href="#" className="flex text-yellow-500 hover:text-yellow-600" >
                                            <FaStar className="mt-0.5 ms-2 me-1" /> {home.rating}</a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bangaluru