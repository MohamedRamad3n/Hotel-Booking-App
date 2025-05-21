import { assets } from "../assets/assets";
import Input from "../shared/Input";

interface HotelRegProps {
  setOpenModal: (value: boolean) => void;
}

const HotelReg = ({ setOpenModal }: HotelRegProps) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl ma-w-4xl max-md:mx-2">
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-xl hidden md:block"
        />
        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          <img
            onClick={() => setOpenModal(false)}
            src={assets.closeIcon}
            alt="close-icon"
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />
          <p className="text-2xl font-semibold mt-6">Hotel Registration Form</p>
          {/* Hotel Form */}
          <Input label="Hotel Name" type="text" id="name" />
          <Input label="Hotel Phone" type="number" id="phone" />
          <Input label="Hotel Address" type="text" id="address" />
          <Input label="City" type="city" id="city" />
          <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white mr-auto px-6 py-2 rounded cursor-pointer mt-6">Register</button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
