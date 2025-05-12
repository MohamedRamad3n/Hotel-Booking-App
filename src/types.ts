export interface HotelCardProps {
    room: Room;
    index: number;
}

export type Owner = {
    _id: string;
    username: string;
    email: string;
    image: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    recentSearchedCities: string[];
};

export type Hotel = {
    _id: string;
    name: string;
    address: string;
    contact: string;
    owner: Owner;
    city: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type Room = {
    _id: string;
    hotel: Hotel;
    roomType: string;
    pricePerNight: number;
    amenities: string[];
    images: string[];
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
};
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