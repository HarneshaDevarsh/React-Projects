// Import images at the top
import img1 from "./assets/img_1.png";
import img2 from "./assets/img_2.png";
import img3 from "./assets/img_3.png";
import img4 from "./assets/img_4.png";

import img5 from "./assets/img_5.png";
import img6 from "./assets/img_6.png";
import img7 from "./assets/img_7.png";
import img8 from "./assets/img_8.png";

import img9 from "./assets/img_9.png";
import img10 from "./assets/img_10.png";
import img11 from "./assets/img_11.png";
import img12 from "./assets/img_12.png";

import { motion } from "framer-motion";

export default function AcceptPaymentsSection() {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Card component for reuse
  const Card = ({ img, title, desc, i }) => (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="border border-gray-300 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
    >
      <a href="#">
        <img src={img} className="rounded-t-xl w-full h-auto" alt={title} />
      </a>
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* Accept Payments */}
      <div className="w-[94%] mb-10 bg-white p-6 sm:p-12 mx-auto rounded-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold">Accept Payments</h1>

        {/* Tabs */}
        <ul className="flex gap-6 mt-6 overflow-x-auto no-scrollbar text-base sm:text-lg">
          <li className="font-semibold border-b-4 pb-2 border-green-700 whitespace-nowrap">
            <a href="#">Top Products</a>
          </li>
          {[
            "On Website/App",
            "Plugins",
            "On Social Media",
            "In Store",
            "Cross Border",
            "With Smart Ad-Ons",
          ].map((tab, i) => (
            <li
              key={i}
              className="font-semibold text-gray-500 hover:text-black whitespace-nowrap"
            >
              <a href="#">{tab}</a>
            </li>
          ))}
        </ul>

        <hr className="mt-[-2px] border border-gray-300" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <Card
            img={img1}
            title="Payment Gateways"
            desc="Offer a Seamless Payment Experience on your website or app."
            i={0}
          />
          <Card
            img={img2}
            title="Payment Button"
            desc="Effortlessly add a pay now button without any code requirement."
            i={1}
          />
          <Card
            img={img3}
            title="Payment Links"
            desc="Create and share links over email, text to assist payment instantly."
            i={2}
          />
          <Card
            img={img4}
            title="Razorpay POS"
            desc="Accept seamless in-store payments with India’s best POS solution."
            i={3}
          />
        </div>
      </div>

      {/* Make Payouts */}
      <div className="w-[94%] mb-10 bg-white p-6 sm:p-12 mx-auto rounded-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold">Make Payouts</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          <Card
            img={img5}
            title="API & Bulk Payouts"
            desc="Make Multiple layouts with a single click for your dashboard."
            i={0}
          />
          <Card
            img={img6}
            title="Source To Pay"
            desc="Control and optimize vendor payments with an integrated payable solution."
            i={1}
          />
          <Card
            img={img7}
            title="Payout Links"
            desc="Share payout links to instants payments, no bank details needed."
            i={2}
          />
          <Card
            img={img8}
            title="Tax Payments"
            desc="Online Tax payments in a single click."
            i={3}
          />
        </div>
      </div>



      {/* Start Business Banking */}
      <div className="w-[94%] mb-10 bg-white p-6 sm:p-12 mx-auto rounded-2xl shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold">Start Business Banking</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          <Card
            img={img9}
            title="Create Account"
            desc="Automate Banking with India's top current accounts standard."
            i={0}
          />
          <Card
            img={img10}
            title="Escrow Account"
            desc="Automate Escrow money transfers with total safety and compliances."
            i={1}
          />
          <Card
            img={img11}
            title="Payout Links"
            desc="Share payout links to instants payments, no bank details needed."
            i={2}
          />
          <Card
            img={img12}
            title="Accounting Integration"
            desc="Easy Integration with your accounting software."
            i={3}
          />
        </div>
      </div>
    </>
  );
}
