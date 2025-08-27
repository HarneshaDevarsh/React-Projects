import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Hydrabad() {
  const homes = [
          {
              id: 1,
              image: "https://a0.muscache.com/im/pictures/afaf1079-4482-429b-b65a-0e34582b042b.jpg?im_w=960",
              title: "Room in Banjara Hills",
              price: "₹2,337 for 2 nights",
              rating: 4.85,
          },
  
          {
              id: 2,
              image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1111546429562969055/original/94e7e25d-eebc-4658-a83d-fd1d623c6bcd.jpeg?im_w=960",
              title: "Home in Banjara Hills",
              price: "₹14,379 for 2 nights",
              rating: 4.96,
          },
  
          {
              id: 3,
              image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM0OTgyMDE0ODYzNDYwMDA4OQ==/original/23d53cc7-b2e6-4121-bfcf-2d9d2f636f37.jpeg?im_w=960",
              title: "Hotel in Hafeezpet",
              price: "₹4,917 for 2 nights",
              rating: 5,
          },
  
          {
              id: 4,
              image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1149178873981628572/original/c8ed0a98-cf40-4efb-9d2f-9bfbd19daf4f.jpeg?im_w=960",
              title: "Flat in Hydrabad",
              price: "₹2,400 for 2 nights",
              rating: 4.76,
          },
      ]
      return (
          <>
              <div className=" py-4">
                  <div className="w-[96%] mx-auto min-h-60">
                      <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                          <h1 className="flex">
                              Places to stay in Hyderabad
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

export default Hydrabad