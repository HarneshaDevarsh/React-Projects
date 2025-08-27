import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"; // Twitter icon from fa6

const Footer = () => {
  return (
    <div className="bg-white w-full mt-10">
      {/* Main Footer Grid */}
      <div className="px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-[94%] mx-auto">
        {/* -------- First Column -------- */}
        <div>
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-7IH0VPsfmHwYVxNapdCiwGNUK8rWk4JBuE9usOoZiHn_h7osooUNzmnGZJaCjvwn52LM9AoZi_DKpLQxzl270uLNS86RBNSktG907Fyt5WSob0C2iASq9r3sSUBv1zecOdaAeVNbcu_AYIO-b_4ZHtQmuDLMJmCYEX6-r5OzNtqT6f2fbttEZMiUMfs/s740/razorpay.png"
            alt="Razorpay Logo"
            className="w-36 mb-3"
          />
          <p className="text-[12px] text-gray-600">
            Razorpay is the only payments solution in India that allows
            businesses to accept, process and disburse payments...
          </p>
          <p className="text-[12px] text-gray-600 mt-4">
            RazorpayX supercharges your business banking experience...
          </p>
          <p className="text-[12px] text-gray-600 mt-4">
            Manage your marketplace, automate bank transfers...
          </p>
          <p className="text-[12px] text-gray-600 mt-4">
            Disclaimer: The RazorpayX powered Current Account and VISA corporate
            credit card are provided by RBI licensed banks...
          </p>

          <div className="flex mt-5 gap-4">
            <img
              src="https://framerusercontent.com/images/UrSNYwLfIXGxYMz28fjhYx3c.png"
              className="w-16"
              alt=""
            />
            <img
              src="https://framerusercontent.com/images/BFa4BpSMTtV62RfYefCwfM5mL0w.png"
              className="w-16"
              alt=""
            />
          </div>
        </div>

        {/* -------- Second Column -------- */}
        <div>
          <ul className="text-sm text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">ACCEPT PAYMENTS</li>
            <li><a href="">Payment Aggregator</a></li>
            <li><a href="">Payment Gateways</a></li>
            <li><a href="">Payment Pages</a></li>
            <li><a href="">Payment Links</a></li>
            <li><a href="">Razorpay POS</a></li>
            <li><a href="">QR Codes</a></li>
            <li><a href="">Subscriptions</a></li>
            <li><a href="">Smart Collect</a></li>
            <li><a href="">Optimizer</a></li>
            <li><a href="">Instant Settlements</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">PAYROLL</li>
            <li><a href="">Razorpay X Payroll</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">BECOME A PARTNER</li>
            <li><a href="">Refer & Earn</a></li>
            <li><a href="">Onboarding APIs</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">MORE</li>
            <li><a href="">Route</a></li>
            <li><a href="">Invoices</a></li>
            <li><a href="">Freelancer Payments</a></li>
            <li><a href="">International Payments</a></li>
            <li><a href="">Flash Checkout</a></li>
            <li><a href="">UPI</a></li>
            <li><a href="">ePOS</a></li>
            <li><a href="">Checkout Demo</a></li>
          </ul>
        </div>

        {/* -------- Third Column -------- */}
        <div>
          <ul className="text-sm text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">BANKING PLUS</li>
            <li><a href="">Razorpay X</a></li>
            <li><a href="">Source to Pay</a></li>
            <li><a href="">Current Accounts</a></li>
            <li><a href="">Payouts</a></li>
            <li><a href="">Payout Links</a></li>
            <li><a href="">Corporate Credit Card</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">DEVELOPERS</li>
            <li><a href="">Docs</a></li>
            <li><a href="">Integrations</a></li>
            <li><a href="">API References</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">RESOURCES</li>
            <li><a href="">Blog</a></li>
            <li><a href="">Learn</a></li>
            <li><a href="">Customer Stories</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Chargeback Guide</a></li>
            <li><a href="">Settlement Guide</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">SOLUTIONS</li>
            <li><a href="">Education</a></li>
            <li><a href="">E-Commerce</a></li>
            <li><a href="">SaaS</a></li>
            <li><a href="">BFSI</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">FREE TOOLS</li>
            <li><a href="">GST Calculator</a></li>
            <li><a href="">GST Number Search</a></li>
            <li><a href="">GST Search by PAN</a></li>
            <li><a href="">ROI Calculator</a></li>
            <li><a href="">CAGR Calculator</a></li>
            <li><a href="">EBITDA Calculator</a></li>
          </ul>
        </div>

        {/* -------- Fourth Column -------- */}
        <div>
          <ul className="text-sm text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">COMPANY</li>
            <li><a href="">About Us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Terms Of Use</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Grievance Redressal</a></li>
            <li><a href="">Responsible Disclosure</a></li>
            <li><a href="">Partners</a></li>
            <li><a href="">White Papers</a></li>
            <li><a href="">Corporate Information</a></li>
          </ul>

          <ul className="text-sm mt-5 text-blue-600 space-y-2">
            <li className="text-gray-500 font-semibold">HELP & SUPPORT</li>
            <li><a href="">Support</a></li>
            <li><a href="">Knowledge Base</a></li>
          </ul>

          <p className="text-sm font-semibold text-gray-500 mt-5">
            CONNECT WITH US
          </p>

          <ul className="flex text-3xl gap-3 mt-5">
            <li><a href=""><FaFacebookSquare className="text-blue-800" /></a></li>
            <li><a href=""><FaSquareXTwitter className="text-black" /></a></li>
            <li><a href=""><FaInstagramSquare className="text-pink-600" /></a></li>
            <li><a href=""><FaGithubSquare className="text-black" /></a></li>
            <li><a href=""><FaLinkedin className="text-blue-800" /></a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 p-3">
        <p className="text-center font-semibold text-xs md:text-sm">
          Payment aggregation services provided by Razorpay Software Private
          Limited (RSPL) - An RBI Authorised Online Payment Aggregator
        </p>
      </div>
    </div>
  );
};

export default Footer;
