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
      setInputTwo(Math.round(value * exchangeRate * 100) / 100);
    } else {
      setInputOne(value);
      setInputTwo(Math.round((value / exchangeRate) * 100) / 100);
    }
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
