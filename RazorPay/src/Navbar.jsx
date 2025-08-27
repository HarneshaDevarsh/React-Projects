import React from "react";
import { useState } from "react";
import { FaHeadset, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="flex justify-between items-center w-[94%] mx-auto py-3">
        {/* Logo */}
        <div className="w-40">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-7IH0VPsfmHwYVxNapdCiwGNUK8rWk4JBuE9usOoZiHn_h7osooUNzmnGZJaCjvwn52LM9AoZi_DKpLQxzl270uLNS86RBNSktG907Fyt5WSob0C2iASq9r3sSUBv1zecOdaAeVNbcu_AYIO-b_4ZHtQmuDLMJmCYEX6-r5OzNtqT6f2fbttEZMiUMfs/s740/razorpay.png"
            alt="logo"
          />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-medium">
            {["Payment","Banking+","Payroll","Engage","Partners","Resources","Pricing"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-blue-600 hover:border-b-2 pb-2">{item}</a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-5 items-center">
            <li><a href="#" className="text-2xl hover:text-blue-600"><FaHeadset /></a></li>
            <li><a href="#"><img className="w-10" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" /></a></li>
          </ul>

          <div className="flex">
            <button className="bg-white text-blue-600 border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 me-3">Login</button>
            <button className="flex items-center bg-blue-600 text-white border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
              SignUp <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center gap-5 font-medium">
            {["Payment","Banking+","Payroll","Engage","Partners","Resources","Pricing"].map((item, i) => (
              <li key={i}><a href="#">{item}</a></li>
            ))}
            <li className="flex gap-4 items-center">
              <a href="#" className="text-2xl"><FaHeadset /></a>
              <a href="#"><img className="w-10" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user" /></a>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-3 mt-4">
            <button className="w-4/5 bg-white text-blue-600 border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50">Login</button>
            <button className="w-4/5 flex justify-center items-center bg-blue-600 text-white border border-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
              SignUp <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </nav>

  );
}
