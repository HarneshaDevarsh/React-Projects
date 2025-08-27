import React from "react";
import { FaFileCode, FaArrowRight, FaFileExport } from "react-icons/fa6";
import { MdWebhook } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";
import { FiLink2 } from "react-icons/fi";
import { BsFillMenuButtonFill } from "react-icons/bs";
import img20 from "./assets/img_20.png"; // change path as per your project

export default function DeveloperSection() {
  return (
    <div className="bg-black">
      {/* Scrolling Tech Stack */}
      <div className="bg-green-600 text-white text-xl font-bold overflow-hidden">
        <marquee behavior="" direction="">
          <div className="whitespace-nowrap p-3 space-x-2">
            JAVA ● PYTHON ● PHP ● NODE-JS ● CURL ● JAVA ● PYTHON ● PHP ● NODE-JS ● CURL ● JAVA ● PYTHON ● PHP ● NODE-JS ● CURL ●
          </div>
        </marquee>
      </div>

      {/* Developer Section */}
      <div className="mt-10 px-6 md:px-12 pb-20">
        <h1 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
          Razorpay is built <br />
          <span className="text-green-600">for developers by developers</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="rounded-2xl border-b-2 border-t-2 border-gray-500 p-6">
            <h2 className="text-2xl text-white font-bold">
              <FaFileCode />
            </h2>
            <h2 className="text-xl text-white font-semibold mt-3">
              Integrations
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Find all popular SDKs, plugins, and server integrations in our
              integration stack.
            </p>
            <button className="flex font-semibold text-white hover:underline mt-5">
              View Docs <FaArrowRight className="ml-2 mt-1" />
            </button>
          </div>

          <div className="rounded-2xl border-b-2 border-t-2 border-gray-500 p-6">
            <h2 className="text-2xl text-white font-bold">
              <MdWebhook />
            </h2>
            <h2 className="text-xl text-white font-semibold mt-3">
              API Reference
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Comprehensive documentation to build powerful payment solutions.
            </p>
            <button className="flex font-semibold text-white hover:underline mt-5">
              View Docs <FaArrowRight className="ml-2 mt-1" />
            </button>
          </div>

          <div className="rounded-2xl border-b-2 border-t-2 border-gray-500 p-6">
            <h2 className="text-2xl text-white font-bold">
              <TbPlugConnected />
            </h2>
            <h2 className="text-xl text-white font-semibold mt-3">Webhooks</h2>
            <p className="text-gray-400 text-sm mt-3">
              Receive real-time notifications for all payment-related events.
            </p>
            <button className="flex font-semibold text-white hover:underline mt-5">
              View Docs <FaArrowRight className="ml-2 mt-1" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-6">
          <h2 className="text-2xl text-white font-semibold">
            Try it out <br /> for yourself
          </h2>
          <img src={img20} alt="demo" className="w-full md:w-1/2 rounded-2xl" />
        </div>
      </div>

      {/* No-Code Section */}
      <div className="w-[94%] mx-auto py-20">
        <p className="text-lg text-gray-500">What if you’re not into code?</p>
        <h1 className="text-3xl md:text-5xl -mt-2 text-green-700 font-semibold">
          Not a developer?
        </h1>
        <h1 className="text-3xl md:text-4xl -mt-4 font-semibold">
          Our No-Code products have you covered
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Payment Links</h1>
              <FiLink2 className="text-3xl text-blue-600" />
            </div>
            <h1 className="mt-5 text-xl md:text-2xl font-semibold">
              Accept payments instantly:{" "}
              <span className="text-blue-700">Share links</span> via email,
              text, or social.
            </h1>
            <div className="flex gap-6 mt-6">
              <button className="flex font-semibold text-blue-700 hover:underline">
                Sign Up <FaArrowRight className="ml-2 mt-1" />
              </button>
              <button className="flex font-semibold text-blue-700 hover:underline">
                Know More <FaArrowRight className="ml-2 mt-1" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Payment Pages</h1>
              <FaFileExport className="text-3xl text-blue-600" />
            </div>
            <h1 className="mt-5 text-xl md:text-2xl font-semibold">
              Accept payments without{" "}
              <span className="text-blue-700">coding on a custom store</span>
            </h1>
            <div className="flex gap-6 mt-6">
              <button className="flex font-semibold text-blue-700 hover:underline">
                Sign Up <FaArrowRight className="ml-2 mt-1" />
              </button>
              <button className="flex font-semibold text-blue-700 hover:underline">
                Know More <FaArrowRight className="ml-2 mt-1" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-semibold">Payment Buttons</h1>
              <BsFillMenuButtonFill className="text-3xl text-blue-600" />
            </div>
            <h1 className="mt-5 text-xl md:text-2xl font-semibold">
              Effortlessly{" "}
              <span className="text-blue-700">add a Pay Now button</span>{" "}
              without coding
            </h1>
            <div className="flex gap-6 mt-6">
              <button className="flex font-semibold text-blue-700 hover:underline">
                Sign Up <FaArrowRight className="ml-2 mt-1" />
              </button>
              <button className="flex font-semibold text-blue-700 hover:underline">
                Know More <FaArrowRight className="ml-2 mt-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
