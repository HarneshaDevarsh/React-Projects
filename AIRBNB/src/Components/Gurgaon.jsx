import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Gurgaon() {
    const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1045601115801545505/original/c678c3a9-d144-4bd3-8c8e-8afa4aaa5c29.jpeg?im_w=960",
            title: "Flat in Gurugram",
            price: "₹5,829 for 2 nights",
            rating: 4.93,
        },

        {
            id: 2,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1254107772370970840/original/e23e546e-f7c8-4086-8c2b-1992a9dae606.jpeg?im_w=960",
            title: "Flat in Gurugam",
            price: "₹7,110 for 2 nights",
            rating: 4.99,
        },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/42c1cf77-e130-4ded-8e74-42e556a90703.jpg?im_w=960",
            title: "Room in Gurugram",
            price: "₹2,328 for 2 nights",
            rating: 4.93,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1112020356827675677/original/76d645bb-afd2-4309-8b88-cbabafbf3992.jpeg?im_w=960",
            title: "Room in Gurugram",
            price: "₹3,538 for 2 nights",
            rating: 4.85,
        },
    ]
    return (
        <>
            <div className=" py-4">
                <div className="w-[96%] mx-auto min-h-60">
                    <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                        <h1 className="flex">
                            Homes in Gurgaon District
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

export default Gurgaon