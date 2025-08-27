function Section() {
  return (
    <>
      <div className='sections'>
        <div className='sec_1'>
          <div className='first text-center py-40'>
            <h1 className='text-white text-center text-6xl'>Come for the <i className='font-mono'>jewels</i></h1>
            <h1 className='text-white text-center text-6xl'>Stay for the <i className='font-mono'>love</i></h1>
            <button className="px-6 py-2 text-lg font-semibold border border-white text-white hover:bg-white hover:text-blue-800 hover:font-semibold rounded-xs mt-5">Come Visit Us</button>
          </div>
        </div>


        <div className="sec_2 min-h-30">
          <div className="section_2 flex justify-between items-center flex-wrap min-h-20 w-[90%] absolute left-1/20 -mt-15">
            <div className="first_1 w-[49%]">
              <h1 className="text-4xl font-semibold">Garden of Emotions</h1>
              <p className="text-lg text-gray-500 mt-5 font-mono">The sparkle that leaves your cheeks blushing, the twinkle that makes you smile warmly. The shimmer that makes your gaze linger. Feel the rush of emotions blossom around your heart when you adorn these sublime jewels.</p>
              <button className="mt-5 px-8 py-3 text-white font-semibold rounded-lg">Explore Collection</button>
            </div>

            <div className="first_2 flex w-[50%]">
              <img src="https://s7ap1.scene7.com/is/image/noveljewelsprod/20thJulyGOEJharokha?dpr=on&ts=1721720448144" className="h-60 ms-auto" alt="" />
              <img src="https://s7ap1.scene7.com/is/image/noveljewelsprod/GOEcomponent?qlt=85&wid=480&ts=1721935906193&fit=wrap&dpr=on,1.5" className="h-60" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section