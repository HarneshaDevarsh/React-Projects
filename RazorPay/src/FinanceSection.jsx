export default function FinanceSection() {
  return (
    <div className="second w-[94%] mt-10 mb-10 mx-auto">
      {/* Blue Box + Image */}
      <div className="flex flex-col mt-20 lg:flex-row">
        {/* Left Text */}
        <div className="bg-blue-800 flex-1 p-6 rounded-bl-3xl rounded-tr-3xl">
          <h1 className="text-green-300 flex text-4xl sm:text-3xl md:text-8xl font-bold">
            Celebrating
            <span className="text-white text-3xl mt-8 me-5 ms-5 sm:text-5xl md:text-6xl block">
              The
            </span>
            Boldest of India
          </h1>

          <hr className="border border-white mt-15" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1">
            <p className="text-white text-sm sm:text-base">
              Bold ambition. Relentless grit.
            </p>
            <button className="font-semibold text-white underline hover:text-green-300 transition">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="bg-blue-800 flex-1 p-4 rounded-tr-3xl lg:rounded-bl-3xl mt-6 lg:mt-0">
          <img
            src="https://framerusercontent.com/images/paW0DPSLT1oGu0wz6hVyRlyGJQ.png?scale-down-to=2048"
            alt="Celebration"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-10 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          The all in One{" "}
          <i className="text-green-600">Finance Platform</i>
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          you’ve been looking for
        </h2>
      </div>

      {/* Features */}
      <div className="mt-7">
        <ul className="flex flex-wrap gap-3 text-base sm:text-lg justify-center lg:justify-start">
          <li className="text-gray-500 w-full sm:w-auto text-center sm:text-left">
            With Razorpay, you can :
          </li>
          {[
            "Accept Payments",
            "Make Payments",
            "Start Business Banking",
            "Automate Payroll",
            "Get Credit Loans",
          ].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-200 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}