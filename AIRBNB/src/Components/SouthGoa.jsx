import { FaGreaterThan, FaStar } from "react-icons/fa6"

function SouthGoa() {
    const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzI4NDYzNDY1NzQ3MjY5MA%3D%3D/original/a0468926-3162-484f-b14b-f5a0a98efb89.jpeg?im_w=960",
            title: "Flat in Benaulim",
            price: "₹4,800 for 2 nights",
            rating: 4.91,
        },

            {
                id: 2,
                image: "https://a0.muscache.com/im/pictures/miso/Hosting-913354713293847677/original/d94d3e26-ac40-4141-b6c2-7af9380ac81c.jpeg?im_w=960",
                title: "Guest house in Majorda",
                price: "₹2,282 for 2 nights",
                rating: 4.88,
            },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-54010816/original/6c250582-b5dc-431c-929e-9f3c544f7d9a.jpeg?im_w=960",
            title: "Apartment in Varca",
            price: "₹3,649 for 2 nights",
            rating: 4.9,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1283274191439773692/original/91c68d84-5da7-48a7-88cd-203cdeec94f0.jpeg?im_w=960",
            title: "Flat in Benaulim",
            price: "₹7,986 for 2 nights",
            rating: 5,
        },
    ]
    return (
        <>
            <div className="bg-gray-100 py-4">
                <div className="w-[96%] mx-auto min-h-60">
                    <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                        <h1 className="flex">
                            Available next month in South Goa
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

export default SouthGoa