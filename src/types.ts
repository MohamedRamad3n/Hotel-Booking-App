
export interface HotelCardProps {
    room: Room;
    index: number;
}

interface Hotel {
    name: string;
    address: string;
    city: string;
    country?: string;
}
export interface Room {
    _id: string;
    hotel: Hotel;
    roomType: string;
    pricePerNight: number;
    amenities: string[];
    images: string[];
    isAvailable: boolean;
    createdAt: string;  // or Date if you're parsing it
    updatedAt: string;  // or Date
    __v: number;
}