import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Jaipur() {
  const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-40155066/original/322bb994-68b4-4e9c-89db-e4ed12f7efc6.jpeg?im_w=960",
            title: "Home in Jaipur",
            price: "₹3,998 for 2 nights",
            rating: 5,
        },

        {
            id: 2,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1019159129263553072/original/6b5c4805-fd0e-421a-8f9a-900f0ec5c3c2.jpeg?im_w=960",
            title: "Room in Jaipur",
            price: "₹2,927 for 2 nights",
            rating: 4.84,
        },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-619981459458327472/original/10e7475b-bf19-4c2e-9a78-d7459f84b5fd.jpeg?im_w=960",
            title: "Apartment in Jaipur",
            price: "₹4,793 for 2 nights",
            rating: 4.83,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1259039137546518939/original/0301a01c-5122-4995-82c5-24c3159eb6d3.jpeg?im_w=960",
            title: "Apartment in Jaipur",
            price: "₹5.350 for 2 nights",
            rating: 4.99,
        },
    ]
    return (
        <>
            <div className="bg-gray-100 py-4">
                <div className="w-[96%] mx-auto min-h-60">
                    <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                        <h1 className="flex">
                            Stay in Jaipur
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

export default Jaipur