import { FaArrowRight, FaRegCompass } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-200 pt-20">
      {/* Hero Section */}
      <div className="w-[94%] xs:w-full mx-auto mt-15 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-blue-700">
            Easy In-Store Payments
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mt-2">
            for India&apos;s boldest disruptors
          </h1>

          <p className="mt-3 text-gray-700 text-base sm:text-lg">
            Quick Payments | Seamless Integration | Top-tier UPI Stack
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="flex items-center justify-center bg-blue-600 font-semibold text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Sign Up Now <FaArrowRight className="ml-3" />
            </button>
            <button className="text-blue-600 font-semibold px-6 py-3 hover:underline">
              Know More
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="https://framerusercontent.com/images/wbiGlgM3MnvENjxeAwDiWdOGWRA.png?scale-down-to=1024"
            className="h-60 sm:h-65 md:h-96 lg:h-[500px] relative z-10"
            alt=""
          />
          <img
            src="https://framerusercontent.com/images/K67zqxljSwqr3qyboWbs4TwnLME.png?scale-down-to=1024"
            className="h-60 sm:h-65 md:h-96 lg:h-[500px] ml-10"
            alt=""
          />

          {/* Floating Card */}
          <div className="absolute top-10 right-5 sm:right-20 bg-blue-100 rounded-xl shadow-lg p-4 w-48">
            <h1 className="text-blue-950 font-bold text-lg">Razorpay POS</h1>
            <p className="text-xs text-gray-600">
              POWERS <b className="font-mono text-lg">WOW</b>
            </p>

            <div className="mt-3 bg-black/20 p-2 rounded">
              <img
                src="https://framerusercontent.com/images/oMZUEP5jITUghScw1adVdQiJDM4.png?scale-down-to=512"
                className="h-20 mx-auto"
                alt=""
              />
            </div>
            <p className="text-xs text-white font-mono text-center mt-2">
              WOW! MOMO FOUNDER
            </p>
          </div>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="bg-white w-[94%] rounded-xl mx-auto py-4 px-3 mt-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-blue-700 h-5 w-1 rounded-r-sm"></div>
          <FaRegCompass className="text-blue-600" />
          <span className="text-sm font-medium">I&apos;m here to</span>
        </div>
        <ul className="flex flex-wrap gap-3 mt-3 text-sm">
          {[
            "Accept Payments",
            "Make Payments",
            "Start Business Banking",
            "Get Credit Loans",
            "Automate Payroll",
          ].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="block bg-gray-200 px-3 py-1.5 rounded-lg hover:bg-blue-100 hover:text-blue-800 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Partner Logos */}
      <div className="w-[94%] mx-auto mt-10 pb-10">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5">
          {[
            "https://framerusercontent.com/images/DaICki1qSQnwmkpLsl3KuKS7eg.png?scale-down-to=512",
            "https://framerusercontent.com/images/x2Zm6zi427C3aYm224pjFo5WA.png?scale-down-to=512",
            "https://framerusercontent.com/images/aFO8PmSrDButYhI8cb5WRNGitQ.png?scale-down-to=512",
            "https://framerusercontent.com/images/loQFVf8midy8jXbZfBVgQJaH27o.png?scale-down-to=512",
            "https://framerusercontent.com/images/5MawuwWfqVlf62PdluvVangBqk.png",
            "https://framerusercontent.com/images/GxEjqBJwBqszrAT7J3yxzd8JNvY.png?scale-down-to=512",
            "https://framerusercontent.com/images/Ilr3bxmQOETtoVodcxWBbTmfg.png?scale-down-to=512",
            "https://framerusercontent.com/images/vObQP9CoD4bZz7StLm9YcIqua4.png",
          ].map((logo, i) => (
            <li key={i} className="flex justify-center">
              <img
                src={logo}
                alt="partner"
                className="h-12 sm:h-14 bg-white px-3 py-2 rounded-lg border border-gray-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}