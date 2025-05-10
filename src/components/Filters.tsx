import { useState } from "react";
import type { CheckboxProps, RadioButtonProps } from "../types";
import { priceRanges, roomTypes, sortingOptions } from "../utils/constant";

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    selected = false,
    onChange = () => { },
}) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
            <input
                type="checkbox"
                checked={selected}
                onChange={(e) => onChange(e.target.checked, label)}
            />
            <span className="font-light select-none">{label}</span>
        </label>
    );
};

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    selected = false,
    onChange = () => { },
}) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
            <input
                type="radio"
                name="sortingOptions"
                checked={selected}
                onChange={() => onChange(label)}
            />
            <span className="font-light select-none">{label}</span>
        </label>
    );
};

const Filters = () => {
    const [openFilter, setOpenFilter] = useState(false);
    return (
        <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
            <div
                className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && "border-b"
                    }`}
            >
                <p className="text-base font-medium text-gray-800">FILTERS</p>
                <div className="text-xs cursor-pointer">
                    <span
                        onClick={() => setOpenFilter(!openFilter)}
                        className="lg:hidden"
                    >
                        {openFilter ? "Hide" : "Show"}
                    </span>
                    <span className="hidden lg:block">CLEAR</span>
                </div>
            </div>
            <div
                className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"
                    } overflow-hidden transition-all duration-700`}
            >
                <div className="px-5 pt-5">
                    <p className="font-medium text-gray-800 pb-2">Popular Filters</p>
                    {roomTypes.map((room, index) => (
                        <Checkbox key={index} label={room} />
                    ))}
                </div>
                <div className="px-5 pt-5">
                    <p className="font-medium text-gray-800 pb-2">Price Range</p>
                    {priceRanges.map((range, index) => (
                        <Checkbox key={index} label={range} />
                    ))}
                </div>
                <div className="px-5 pt-5 pb-3">
                    <p className="font-medium text-gray-800 pb-7">Sort By</p>
                    {sortingOptions.map((option, index) => (
                        <RadioButton key={index} label={option} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filters;
