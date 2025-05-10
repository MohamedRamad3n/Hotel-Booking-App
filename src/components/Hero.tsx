import Form from "./Hotel-Booking-Form";

const Hero = () => {
    return (
        <div
            className='flex flex-col items-start justify-center px-6 
    md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-center bg-cover h-screen'
        >
            <p className="bg-[#49b9ff]/50 px-3.5 py-1 rounded-full mt-20">
                The Ultimate Hotel Experience
            </p>
            <h1 className="font-playfair text-4xl md-text-5xl md-text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
                Discover Your Perfect Getaway Destination
            </h1>
            <p className="max-w-130 mt-2 text-sm md:text-base font-light text-gray-200">
                Unparalleled luxury and comfort await at the world's most exclusive
                hotels and resorts.start your journey today
            </p>
            <Form />
        </div>
    );
};

export default Hero;
