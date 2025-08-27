import { FaGreaterThan, FaStar } from "react-icons/fa6"

function Delhi() {
  const homes = [
          {
              id: 1,
              image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNDI1MTUwMTIwOTc1NTM3NQ%3D%3D/original/dee4e783-dd6b-49ba-8e6b-68fc69ca900f.jpeg?im_w=960",
              title: "Flat in Mahipalpur",
              price: "₹5,247 for 2 nights",
              rating: 5,
          },
  
          {
              id: 2,
              image: "https://a0.muscache.com/im/pictures/miso/Hosting-1178229795523435693/original/a9d641cf-dcb4-4d1b-9325-d62c66e3c876.jpeg?im_w=960",
              title: "Tiny home in Saket",
              price: "₹6,847 for 2 nights",
              rating: 4.94,
          },
  
          {
              id: 3,
              image: "https://a0.muscache.com/im/pictures/miso/Hosting-1051113521474495258/original/47a81458-6017-43bb-8a2e-6322bd5a3aae.png?im_w=960",
              title: "Apartment in Malaviya Nagar",
              price: "₹7,300 for 2 nights",
              rating: 5,
          },
  
          {
              id: 4,
              image: "https://a0.muscache.com/im/pictures/bc209015-a7c1-42d6-9954-86303cc3579e.jpg?im_w=960",
              title: "Apartment in Hauz Khas",
              price: "₹17,115 for 2 nights",
              rating: 4.93,
          },
      ]
      return (
          <>
              <div className=" py-4">
                  <div className="w-[96%] mx-auto min-h-60">
                      <a href="#" className="flex text-xl text-gray-600 hover:text-black">
                          <h1 className="flex">
                              Popular homes in New Delhi
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

export default Delhi