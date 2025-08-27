import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const SubmitEvent = ()=>{
        navigate("/front")
    }

    return (
        <div className="relative h-screen w-full bg-black text-white text-center">
            {/* Background image */}
            <img
                src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Coffee Cup"
                className="absolute top-0 left-0 w-full h-110 object-contain max-sm:h-80 md:h-100 sm:h-90 "
            />

            {/* Overlay content */}
            <div className="relative flex flex-col items-center mx-auto h-full max-sm:w-[90%]">
                <h1 className="font-semibold max-sm:mt-80 max-sm:text-2xl md:text-3xl md:mt-90 lg:mt-100 lg:text-5xl sm:text-2xl sm:mt-90">Fall in Love with Coffee in Blissful Delight !</h1>

                <p className='mt-3 text-gray-300 max-sm:text-sm md:mt-2 lg:text-xl lg:mt-4'>Welcome to our cozy coffee corner, where every cup is a delightful for you.</p>

                <button
                onClick={SubmitEvent}
                className='bg-amber-900 px-5 py-2 text-xl font-semibold rounded-md cursor-pointer hover:bg-amber-950 max-sm:text-sm max-sm:mt-3 md:mt-5 lg:mt-10 sm:mt-4'>Get Started</button>
            </div>
        </div>
    );
};

export default Home;
