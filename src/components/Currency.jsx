import { CircleFlag } from 'react-circle-flags';
import { FaAngleDown } from 'react-icons/fa';

function Currency({
  label,
  codeName,
  cc,
  handleCurrencyClick,
  inputOne,
  setInputOne,
  inputTwo,
  setInputTwo,
  exchangeRate,
  setExchangeRate,
}) {
  const id = label.split(' ')[0].toLowerCase();

  const checkValue = (e) => {
    const value = handleDecimalsOnValue(e.target.value);
    if (id === 'amount') {
      setInputOne(value);
      setInputTwo(formatToTwoDecimals(value * exchangeRate));
    } else {
      setInputOne(value);
      setInputTwo(formatToTwoDecimals(value / exchangeRate));
    }
  };

  const handleDecimalsOnValue = (value) => {
    const regex = /\d*\.?\d{0,2}/;
    return value === '.' ? '' : value.match(regex)[0];
  };

  const formatToTwoDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  return (
    <>
      <div className="flex flex-col">
        <p className="text-gray-500 text-sm mb-2 font-light">{label}</p>
        <div className="outline outline-1 outline-gray-300 rounded-md flex group hover:outline-2  hover:outline-gray-500 focus-within:hover:outline-[3px] focus-within:hover:outline-black focus-within:outline-[3px] focus-within:outline-black ease-in-out duration-300">
          <input
            type="text"
            value={inputOne}
            onChange={checkValue}
            className="rounded-md p-4 w-full font-semibold text-lg sm:text-xl"
          />
          <fieldset>
            <button
              id={id}
              className="rounded-md p-4"
              onClick={(e) => {
                e.stopPropagation();
                handleCurrencyClick(id);
              }}
            >
              <span className="flex items-center justify-between">
                <span className="mr-2">
                  <CircleFlag countryCode={codeName} className="max-w-8" />
                </span>
                <span className="font-semibold mr-2 text-lg">{cc}</span>
                <span>
                  <FaAngleDown />
                </span>
              </span>
            </button>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Currency;
