import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Pune() {
    const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQwMjAzMDM4OTU4ODQwOTIwOQ==/original/26246df0-4151-4adf-86d8-fb37321a3777.jpeg?im_w=960",
            title: "Home in Pune",
            price: "₹11,466 for 2 nights",
            rating: 5,
        },

        {
            id: 2,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1166641853711758251/original/e989d39a-6f8f-41c9-ba17-087f5f05a93c.jpeg?im_w=960",
            title: "Flat in Gahunje",
            price: "₹5,692 for 2 nights",
            rating: 4.9,
        },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1249051397972189086/original/1edc5587-bdcc-4f24-a167-9eab871e8f64.jpeg?im_w=960",
            title: "Flat in Pune",
            price: "₹4,793 for 2 nights",
            rating: 4.91,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1352192193730399354/original/b1523ddd-eacb-418f-9cd8-9bd4961ffcb6.jpeg?im_w=960",
            title: "Flat in Pune",
            price: "₹4,108 for 2 nights",
            rating: 4.77,
        },
    ]
    return (
        <>
            <div className="bg-gray-100 py-4">
                <div className="w-[96%] mx-auto min-h-60">
                    <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                        <h1 className="flex">
                            Available next month in Pune
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

export default Pune