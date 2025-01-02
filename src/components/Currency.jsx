import { CircleFlag } from 'react-circle-flags';
import { FaAngleDown } from 'react-icons/fa';

function Currency({ label, country, currencyValue }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="text-gray-500 text-sm mb-2 font-light">
        {label}
      </label>
      <div className="border border-black rounded-md flex">
        <input type="text" className="rounded-md p-4 font-semibold text-xl" />
        <button className="rounded-md p-4">
          <span className="flex items-center justify-between">
            <span className="mr-2">
              <CircleFlag countryCode={country} width={35} />
            </span>
            <span className="font-semibold mr-2 text-lg">{currencyValue}</span>
            <span>
              <FaAngleDown />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Currency;
