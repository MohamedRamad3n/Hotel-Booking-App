import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "./StarRating";
import type { Amenity } from "../types";

const Rooms = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col items-start text-left">
        <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
      </div>
      {/* Room Cards */}
      {roomsDummyData.map((room) => (
        <div
          key={room._id}
          className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
        >
          <img
            onClick={() => {
              navigate(`/rooms/${room._id}`);
              scrollTo(0, 0);
            }}
            className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            src={room.images[0]}
            alt="hotel-img"
            title="View Room Details"
          />
          <div className="md:w-1/2 flex flex-col gap-2">
            <p className="text-gray-500">{room.hotel.city}</p>
            <p
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              className="text-gray-800 text-3xl font-playfair cursor-pointer"
            >
              {room.hotel.name}
            </p>
            <div className="flex items-center gap-1">
              <StarRating />
              <p className="ml-2">200+ Reviews</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
              <img src={assets.locationIcon} alt="location-icon" />
              <span>{room.hotel.address}</span>
            </div>
            {/*Room Amenities*/}
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {(room.amenities as Amenity[]).map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                >
                  <img
                    src={facilityIcons[amenity]}
                    alt={amenity}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{amenity}</p>
                </div>
              ))}
            </div>
            {/* Price and Book Now Button */}
            <p className="text-xl font-medium  text-gray-700">
              ${room.pricePerNight} /night
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
