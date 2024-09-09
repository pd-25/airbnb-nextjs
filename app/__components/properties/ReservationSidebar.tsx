export default function ReservationSidebar() {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$339 per night</h2>

                {/* <DatePicker
                value={dateRange}
                bookedDates={bookedDates}
                onChange={(value) => _setDateRange(value.selection)}
            /> */}

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>

                <select
                    className="w-full -ml-1 text-xm"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>4</option>
                    <option>4</option>
                </select>
            </div>

            <div
                className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl"
            >
                Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$331 * 4 nights</p>

                <p>$900</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>FastapiAirbnb fee</p>

                <p>$93</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>

                <p>$993</p>
            </div>
        </aside>
  )
}
