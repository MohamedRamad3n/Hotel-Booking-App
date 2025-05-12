import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import type { Amenity, Room } from "../types";
import StarRating from "../components/StarRating";
import FormCheck from "../components/FormCheck";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [mainImage, setMainImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const foundRoom = roomsDummyData.find((room) => room._id === id) || null;
    if (foundRoom && foundRoom.images.length > 0) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
  }, []);
  console.log(room, mainImage);

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room?.hotel.name}{" "}
          <span className="font-inter text-sm">({room?.roomType})</span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20% OFF
        </p>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <StarRating />
        <p className="ml-2">200+ reviews</p>
      </div>
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="location-icon" />
        <span>{room?.hotel.address}</span>
      </div>
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="w-full lg:w-1/2">
          <img src={mainImage} alt="Room Image" />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image)}
              key={index}
              src={image}
              alt="Room Image"
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                mainImage === image && "outline-3 outline-orange-500"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {(room?.amenities as Amenity[])?.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
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
        </div>
        <p className="text-xl font-medium  text-gray-700">
          ${room?.pricePerNight}/night
        </p>
      </div>
      {/* checkIn and checkOut Form */}
      <FormCheck />
      {/* Common Specifications */}
      <div className="mt-25 space-y-4">
        {roomCommonData.map((spec, index) => (
          <div key={index} className="flex items-start gap-2">
            <img src={spec.icon} alt={`${spec.title} Icon`} className="w-6.5" />
            <div>
              <p className="text-base">{spec.title}</p>
              <p className="text-gray-500">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-4xl border-y border-gray-300 my-15 py-10 text-gray-500">
        Guests will be allocated on the ground floor according to availability.
        You get a comfortable Two bedroom apartment has a true city feeling. The
        price quoted is for two guest, at the guest slot please mark the number
        of guests to get the exact price for groups. The Guests will be
        allocated ground floor according to availability. You get the
        comfortable two bedroom apartment that has a true city feeling.
      </div>
      {/* Hosted By */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          <img
            src={room?.hotel.owner.image}
            alt="host"
            className="h-18 w-18 md:h-18 rounded-full"
          />
          <div>
            <p className="text-lg md:text-xl">Hosted by {room?.hotel.name}</p>
            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>
        <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
