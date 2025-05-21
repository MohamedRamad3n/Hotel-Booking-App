import { cities } from "../assets/assets"

interface InputProps {
    id: string,
    type: string,
    label: string
}
const Input = ({ id, type, label }: InputProps) => {
    return (
        <div className="w-full mt-4">
            <label htmlFor={id} className="font-medium text-gray-500">
                {label}
            </label>
            {id === "city" ? (
                <select id={id} className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required>
                    <option value="">Select City</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
            ) : (<input id={id} required type={type} placeholder="Type Here" className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500" />)

            }
        </div>
    )
}

export default Input