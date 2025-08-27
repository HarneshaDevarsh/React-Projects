import { FaGreaterThan, FaStar } from "react-icons/fa6";

function NorthGoa() {

    const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1273743473381368156/original/1a84124d-5df1-4691-9c08-99840ee0fd4d.jpeg?im_w=960",
            title: "Apartment in Anjuna",
            price: "₹3,389 for 2 nights",
            rating: 4.85,
        },

        {
            id: 2,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMyMTAzOTg4Nzk2ODQ3OTA1OQ%3D%3D/original/b94f2a3b-a147-4001-a0a5-4c1b7cf906f3.jpeg?im_w=960",
            title: "Apartment in Candolim",
            price: "₹5,694 for 2 nights",
            rating: 4.96,
        },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM4NTU0ODk5MDg1NTQ0MjM0Mw==/original/e74c3a4c-044f-4c59-9dff-24bd3a65e502.jpeg?im_w=960",
            title: "Flat in Calangute",
            price: "₹9,241 for 2 nights",
            rating: 5,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTcxNzQ2MDUzMjgwOTkzNDU0/original/a8a7fe54-5eb6-4698-be50-54721b451b63.jpeg?im_w=960",
            title: "Flat in Arpora",
            price: "₹4,793 for 2 nights",
            rating: 5,
        },
    ];

    return (
        <div className="mt-35">
            <div className="w-[96%] mx-auto min-h-60">
                <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                    <h1 className="flex">
                        Popular homes in North Goa
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
    );
}

export default NorthGoa