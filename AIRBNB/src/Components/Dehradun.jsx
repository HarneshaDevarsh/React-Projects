import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Dehradun() {
    const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/1220a900-9985-4239-aa21-cb9693529ba0.jpg?im_w=960",
            title: "Tiny home in Dehradun",
            price: "₹4,053 for 2 nights",
            rating: 4.95,
        },

        {
            id: 2,
            image: "https://a0.muscache.com/im/pictures/airflow/Hosting-563473642588111057/original/15f6c017-6c71-42ed-a2cb-5688060b2d43.jpg?im_w=960",
            title: "Villa in Dehradun",
            price: "₹10,955 for 2 nights",
            rating: 4.98,
        },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1337553432718040129/original/6c544f17-e8cc-4464-ba47-cc7dfa0583eb.jpeg?im_w=960",
            title: "Home in Dehradun",
            price: "₹3,905 for 2 nights",
            rating: 4.93,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1309880539083847374/original/ac262dcc-d966-48d9-b833-daff54f8acef.jpeg?im_w=960",
            title: "Home in Dehradun",
            price: "₹4,335 for 2 nights",
            rating: 4.95,
        },
    ]
    return (
        <>
            <div className="bg-gray-100 py-4">
                <div className="w-[96%] mx-auto min-h-60">
                    <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                        <h1 className="flex">
                            Check out homes in Dehradun
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

export default Dehradun