import { FaCartShopping, FaLocationDot, FaMessage, FaBookOpen, FaFileCode, FaArrowRight } from "react-icons/fa6";

export default function ResponsivePage() {
  return (
    <div className="bg-gray-50">
      {/* Section One */}
      <div className="bg-white w-full px-6 sm:px-10 py-12 sm:py-20">
        {/* Top Heading + Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
              Powering every industry.
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-snug">
              Powering all disruptors.
            </h1>
          </div>

          <div>
            <ul className="flex flex-wrap text-xl sm:text-2xl text-gray-600 gap-6">
              <li><FaCartShopping /></li>
              <li><FaLocationDot /></li>
              <li><FaMessage /></li>
              <li><FaBookOpen /></li>
              <li><FaFileCode /></li>
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <ul className="flex flex-wrap gap-5 mt-10 text-base sm:text-lg">
          <li className="font-semibold border-b-4 pb-2 border-green-700">
            <a href="#">E-Commerce</a>
          </li>
          {["Education", "BFSI", "SaaS", "Freelancer"].map((tab, i) => (
            <li key={i} className="font-semibold text-gray-500 hover:text-black">
              <a href="#">{tab}</a>
            </li>
          ))}
        </ul>

        <hr className="mt-[-2px] border border-gray-300" />

        {/* Background Section */}
        <div className="bg-[url('https://framerusercontent.com/images/F3BzYQjHmEPoe0X0YmHXSTO2hiE.png')] bg-cover bg-center h-auto lg:h-[90vh] mt-5 flex items-center p-6 sm:p-10">
          <div className="bg-white w-full lg:w-[46%] p-6 sm:p-8 rounded-2xl shadow-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Empower your </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-600">
              e-commerce business
            </h1>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Streamline payment management with a unified dashboard, enabling both online and in-person payment collection while enhancing conversion rates and minimizing fraud.
            </p>

            {/* Logos */}
            <ul className="flex flex-wrap items-center gap-3 mt-10 sm:mt-16">
              <li><img src="https://framerusercontent.com/images/YsvuSiklWagcyzwUFy5DAVZkjY.png" className="w-12" alt="" /></li>
              <li><img src="https://framerusercontent.com/images/NLUTOlvMNLQrms90Dn203naq8.png?scale-down-to=512" className="w-12" alt="" /></li>
              <li><img src="https://framerusercontent.com/images/k5UdVvwCfB0xBQ9CvoCFo8B8Nx4.png?scale-down-to=512" className="w-12" alt="" /></li>
              <li><img src="https://framerusercontent.com/images/kysqFYZar2auXuCuRNXifiHezBI.png?scale-down-to=512" className="w-12" alt="" /></li>
              <li className="text-sm text-gray-600 font-bold">+ 70,000 others</li>
            </ul>

            {/* Button */}
            <button className="flex items-center gap-3 bg-blue-600 font-semibold text-white border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 mt-8">
              See Solutions <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="w-full px-6 sm:px-10 py-12 sm:py-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
          We have innovated at every instance, creating a disruption.
        </h1>

        <div className="flex flex-col lg:flex-row mt-10 justify-between w-full gap-8">
          {/* Left Card */}
          <div className="bg-white p-6 lg:p-8 w-full lg:w-[70%] rounded-2xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-500">
              MoneySaver Export Account
            </h3>

            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold mt-5 leading-snug">
              <span className="text-blue-700">Open a virtual account in 200+ countries,</span> save up to 50% on international bank transfer charges. Receive ACH/SWIFT/SEPA/BACS payments
            </h1>

            <p className="text-gray-500 mt-6 sm:mt-10">
              Receive international wire transfers with ease with a smart account.
            </p>

            <div className="flex flex-wrap gap-4 mt-5">
              <button className="flex items-center gap-3 bg-blue-600 font-semibold text-white border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
                Sign Up <FaArrowRight />
              </button>
              <button className="font-semibold text-blue-600 px-5 py-2 hover:underline underline-offset-2">
                Know More
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white p-6 lg:p-8 w-full lg:w-[30%] rounded-2xl shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-500">
              Turbo UPI
            </h3>

            <h1 className="text-xl sm:text-2xl lg:text-[25px] font-bold mt-5 leading-snug">
              <span className="text-blue-700">Experience a 5X faster checkout,</span> achieve a 10% success rate boost, all without any redirections to UPI apps.
            </h1>

            <p className="text-gray-500 mt-6">
              Get India's fastest one-step UPI payment solution for businesses.
            </p>

            <div className="flex flex-wrap gap-4 mt-5">
              <button className="flex items-center gap-3 bg-blue-600 font-semibold text-white border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
                Sign Up <FaArrowRight />
              </button>
              <button className="font-semibold text-blue-600 px-5 py-2 hover:underline underline-offset-2">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
