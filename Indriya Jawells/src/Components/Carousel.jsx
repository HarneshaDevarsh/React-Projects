import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
  const images = [
    "https://s7ap1.scene7.com/is/image/noveljewelsprod/PLPPagebanner1?qlt=85&wid=1200&ts=1721723676044&fit=wrap&dpr=on,1.5",
    "https://s7ap1.scene7.com/is/image/noveljewelsprod/PLPPagebanner2?qlt=85&wid=1600&ts=1721723405248&dpr=on,1.5",
    "https://s7ap1.scene7.com/is/image/noveljewelsprod/PLPPagebanner3?qlt=85&wid=1600&ts=1723220933447&dpr=on,1.5"
  ]

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <>
      <div className="carousel flex items-center mask-b-from-30%">

        {/* Carousel Image */}
        <div className="img">
          {images.map((item, i) =>
            current === i && (<img key={i} src={item} alt="img" />)
          )}
        </div>

        {/* left Arrow */}
        <div className="flex w-[98%] justify-between absolute">
          <div className="left ms-5" onClick={prevSlide}>
            <FaArrowLeft className="" />
          </div>

          {/* Rigth Arrow */}
          <div className="right" onClick={nextSlide}>
            <FaArrowRight className="" />
          </div>
        </div>
      </div>

      <div className="content absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl font-semibold mb-3">Handcrafted Jewellery</h1>
        <p className="text-xl text-gray-600">A dazzling array of exquisite designs, curated to elevate every occasion</p>
      </div>


      <div className="mt-12">
        <img src="https://s7ap1.scene7.com/is/image/noveljewelsprod/WeddingBonanza?qlt=85&wid=1600&ts=1747986425628&fit=wrap&dpr=off" className="w-[full]" alt="" />
      </div>
    </>
  );
}

export default Carousel;