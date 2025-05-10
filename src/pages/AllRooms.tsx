import Filters from "../components/Filters";
import Rooms from "../components/Rooms";

const AllRooms = () => {
    return (
        <div className="flex flex-col-reverse  lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
            {/* Left Side */}
            <Rooms />
            {/* Right Side Filters */}
            <Filters />
        </div>
    );
};

export default AllRooms;
