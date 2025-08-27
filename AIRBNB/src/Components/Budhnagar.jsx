import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Budhnagar() {
  const homes = [
        {
            id: 1,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1221588138730305175/original/bb633f08-c383-4fd5-84a0-fcf0fe5a1593.jpeg?im_w=960",
            title: "Hotel in Greater Noida",
            price: "₹2,720 for 2 nights",
            rating: 4.94,
        },

        {
            id: 2,
            image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwNDE5MzMyODE5MzA3ODk1MA%3D%3D/original/db44399f-6c9d-4691-abc2-fd198f198cb3.jpeg?im_w=960",
            title: "Home in Greater Noida",
            price: "₹4,821 for 2 nights",
            rating: 4.89,
        },

        {
            id: 3,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1251954492211685851/original/eb656ace-27df-4a75-b5d4-c3ffd6aa5d7e.jpeg?im_w=960",
            title: "Hotel in Greater Noida",
            price: "₹2,960 for 2 nights",
            rating: 4.87,
        },

        {
            id: 4,
            image: "https://a0.muscache.com/im/pictures/miso/Hosting-1192160113078643595/original/b7981e42-5843-429a-b2e6-0677fe00851a.jpeg?im_w=960",
            title: "Flat in Greater Noida",
            price: "₹4,222 for 2 nights",
            rating: 4.96,
        },
    ]
    return (
        <>
            <div className="bg-gray-100 py-4">
                <div className="w-[96%] mx-auto min-h-60">
                    <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                        <h1 className="flex">
                            Available next month in Gautam Buddha Nagar
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

export default Budhnagar