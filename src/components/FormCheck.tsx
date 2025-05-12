const FormCheck = () => {
  return (
    <form className="flex flex-col md:flex-row items-center md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
      <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
        <div className="flex flex-col">
          <label htmlFor="checkInDate" className="font-medium">
            check-In
          </label>
          <input
            type="date"
            id="checkInDate"
            placeholder="check-In"
            className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
            required
          />
        </div>
        <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
        <div className="flex flex-col">
          <label htmlFor="checkOutDate" className="font-medium">
            check-Out
          </label>
          <input
            type="date"
            id="checkOutDate"
            placeholder="check-Out"
            className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
            required
          />
        </div>
        <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
        <div className="flex flex-col">
          <label htmlFor="guests" className="font-medium">
            Guests
          </label>
          <input
            type="number"
            id="guests"
            placeholder="0"
            className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
      >
        Check Availability
      </button>
    </form>
  );
};

export default FormCheck;
