
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
    amenities: Amenity[];
    images: string[];
    isAvailable: boolean;
    createdAt: string;  // or Date if you're parsing it
    updatedAt: string;  // or Date
    __v: number;
}
export type Amenity = "Free WiFi" | "Free Breakfast" | "Room Service" | "Mountain View" | "Pool Access";


export interface CheckboxProps {
    label: string;
    selected?: boolean;
    onChange?: (checked?: boolean, label?: string) => void;
}

export interface RadioButtonProps {
    label: string;
    selected?: boolean;
    onChange?: (label: string) => void;
  }