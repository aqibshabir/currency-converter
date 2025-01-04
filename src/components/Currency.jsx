import { useState } from 'react';
import { CircleFlag } from 'react-circle-flags';
import { FaAngleDown } from 'react-icons/fa';

function Currency({ label, country, currencyValue, dialog, setDialog, handleCurrencyClick }) {
  const [currentValue, setCurrentValue] = useState('');

  const checkValue = (e) => {
    setCurrentValue(handleDecimalsOnValue(e.target.value));
  };

  const handleDecimalsOnValue = (value) => {
    const regex = /\d*\.?\d{0,2}/;
    return value.match(regex)[0];
  };

  return (
    <>
      <div className="flex flex-col">
        <p className="text-gray-500 text-sm mb-2 font-light">{label}</p>
        <div className="border border-black rounded-md flex">
          <input
            type="text"
            value={currentValue}
            onChange={checkValue}
            className="rounded-md p-4 w-full font-semibold text-lg sm:text-xl"
          />
          <button className="rounded-md p-4" onClick={handleCurrencyClick}>
            <span className="flex items-center justify-between">
              <span className="mr-2">
                <CircleFlag countryCode={country} className="max-w-8" />
              </span>
              <span className="font-semibold mr-2 text-lg">{currencyValue}</span>
              <span>
                <FaAngleDown />
              </span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Currency;
