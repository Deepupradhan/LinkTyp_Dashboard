export default function CardStyle() {
    return (
      <div className="flex justify-center">
        <div className="pb-20 text-gray-700">
          {/* Header */}
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-bold sm:text-3xl uppercase tracking-widest">
              Select Card Style
            </h2>
          </div>
  
          {/* Card options */}
          <div className="grid gap-20 lg:grid-cols-2 pt-10">
            {/* Placeholder card */}
            <div className="w-full flex justify-center items-center border-2 rounded-3xl h-20">
              <h1 className="uppercase tracking-widest">Card Style</h1>
            </div>
  
            {/* Card options */}
            <div className="relative w-72 lg:w-96 flex flex-col items-center h-full justify-center">
              {/* Option 1 */}
              <div className="relative w-72 lg:w-96">
                <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                <span className="peer-checked:border-blue-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-blue-400 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 pr-20 bg-gray-400"
                  htmlFor="radio_2"
                >
                  <div className="ml-5"></div>
                </label>
              </div>
  
              {/* Option 2 */}
              <div className="relative w-72 lg:w-96 mt-10">
                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                <span className="peer-checked:border-blue-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-blue-400 peer-checked:bg-blue-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 pr-20 bg-gray-400"
                  htmlFor="radio_1"
                >
                  <div className="ml-5"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  