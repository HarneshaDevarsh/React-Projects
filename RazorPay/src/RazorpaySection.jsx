import React from "react";
import { IoIosWarning } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

// import your images
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";

const RazorpaySection = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[94%] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Razorpay grows with <span className="text-blue-700">you!</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            1,50,000 + Business
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-6">
          {/* Card 1 */}
          <div className="card_1 flex-1">
            <div className="card1">
              <div className="front">
                <img src={card1} className="h-20 rounded-2xl" alt="card1" />
              </div>
              <div className="back bg-white border border-gray-400 shadow-2xl rounded-2xl p-4">
                <h1 className="text-lg md:text-2xl font-semibold">
                  Razorpay Magic Checkout is truly a magical solution. Our
                  conversion rate has increased by 35% & our COD, RTO has
                  drastically decreased.
                </h1>
                <h3 className="text-sm md:text-lg font-semibold mt-6">
                  Durlabh Rawat
                </h3>
                <p className="text-gray-600">Fouder, Barosi</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card_1 flex-1 -mt-5 md:-mt-13">
            <div className="card1">
              <div className="front">
                <img src={card2} className="h-20 rounded-2xl" alt="card2" />
              </div>
              <div className="back bg-white border border-gray-400 shadow-2xl rounded-2xl p-4">
                <h1 className="text-lg md:text-2xl font-semibold">
                  Razorpay simplifies cross-border bank transfers with the
                  MoneySaver Exporter Account, reducing FIRC generation time from
                  up to 5 days to seconds.
                </h1>
                <h3 className="text-sm md:text-lg font-semibold mt-6">
                  Nikita Gujaral
                </h3>
                <p className="text-gray-600">Founder, AN Fashions</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card_1 flex-1">
            <div className="card1">
              <div className="front">
                <img src={card3} className="h-20 rounded-2xl" alt="card3" />
              </div>
              <div className="back bg-white border border-gray-400 shadow-2xl rounded-2xl p-4">
                <h1 className="text-lg md:text-2xl font-semibold">
                  We chose Razorpay because Razorpay is easy to setup, there are
                  different options for my customers & millions of businesses
                  already trust Razorpay.
                </h1>
                <h3 className="text-sm md:text-lg font-semibold mt-6">
                  Anushree Goenka
                </h3>
                <p className="text-gray-600">Co-Fouder, Spark Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-red-50 border border-red-300 mt-10 md:mt-20 p-4 rounded-xl mb-5">
          <div className="flex gap-2">
            <p className="text-sm text-red-700">
              <IoIosWarning />
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              To the fullest extent permitted by law, Razorpay Software Private
              Limited, its affiliates, and each of their respective officers,
              directors, members, employees, and agents (“Razorpay”) NEVER ask you
              or any individual to share their personal or financial details for
              the purpose of any investments, trading, employment or any other
              related or incidental activity.{" "}
              <a href="/" className="text-blue-600">
                Read more
              </a>
            </p>
          </div>
          <button className="flex text-xs ms-5 px-3 py-1 border rounded-sm font-semibold text-blue-700 hover:bg-blue-50 mt-3">
            Support{" "}
            <span className="ms-1 mt-1">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="p-6 md:p-10 py-10 md:py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Supercharge your business <br /> with Razorpay
        </h1>
        <button className="flex items-center justify-center gap-2 mx-auto text-lg md:text-xl px-5 py-3 border rounded-md font-semibold text-white bg-blue-700 hover:bg-blue-800 mt-6 md:mt-8">
          Sign Up Now <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default RazorpaySection;
