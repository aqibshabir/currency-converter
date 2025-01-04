import { useState } from 'react';
import Currency from './components/Currency';
import { currencies } from './controllers/currencies';
import { HiOutlineSwitchHorizontal, HiOutlineSwitchVertical } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { CircleFlag } from 'react-circle-flags';

function App() {
  const [dialog, setDialog] = useState(false);

  const handleCurrencyClick = () => {
    setDialog(!dialog);
  };

  return (
    <>
      {dialog ? (
        <>
          <div className="w-full h-[90%] top-[10%] sm:w-72 sm:h-72 sm:top-[45%] sm:left-[40%] bg-white absolute rounded-3xl">
            <div className="flex justify-end">
              <button
                className="m-4 rounded-full hover:bg-gray-200 p-2"
                onClick={handleCurrencyClick}
              >
                <RxCross2 size={18} className="" />
              </button>
            </div>
            <div className="border border-black m-4 h-10 rounded-lg flex justify-start items-center mb-8">
              <span>
                <IoIosSearch size={25} className="ml-2" />
              </span>
              <input type="text" className="rounded-lg pl-2" placeholder="Search..." />
            </div>
            <div>
              <ul name="" id="" className="overflow-y-auto h-[34rem] sm:h-[8rem] mx-2">
                {currencies.map((country) => (
                  <li
                    key={country.codeName}
                    className="flex items-center border border-white rounded-xl hover:border-black/70 p-3"
                  >
                    <CircleFlag
                      countryCode={country.codeName.toLowerCase()}
                      className="max-w-6 ml-4 mr-3"
                    />
                    <span className="tracking-wide font-light">{country.cc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-[#163300] p-4 pb-24 sm:p-20" onClick={handleCurrencyClick}>
            <div className="mb-4">
              <h1 className="text-center text-4xl lg:text-6xl font-black text-[#9fe870] my-8">
                CURRENCY CONVERTER
              </h1>
            </div>
            <div className="bg-white p-4 rounded-2xl">
              <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-evenly sm:items-center">
                <Currency
                  label={'Amount'}
                  country={'uk'}
                  currencyValue={'GBP'}
                  dialog={dialog}
                  setDialog={setDialog}
                  handleCurrencyClick={handleCurrencyClick}
                />
                <button className="mt-4">
                  <HiOutlineSwitchVertical size={30} className="m-4" />
                </button>
                <Currency
                  label={'Converted to'}
                  country={'us'}
                  currencyValue={'USD'}
                  dialog={dialog}
                  setDialog={setDialog}
                  handleCurrencyClick={handleCurrencyClick}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-[#163300] p-4 pb-24 sm:p-20">
          <div className="mb-4">
            <h1 className="text-center text-4xl lg:text-6xl font-black text-[#9fe870] my-8">
              CURRENCY CONVERTER
            </h1>
          </div>
          <div className="bg-white p-4 rounded-2xl">
            <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-evenly sm:items-center">
              <Currency
                label={'Amount'}
                country={'uk'}
                currencyValue={'GBP'}
                dialog={dialog}
                setDialog={setDialog}
                handleCurrencyClick={handleCurrencyClick}
              />
              <button className="mt-4">
                <HiOutlineSwitchVertical size={30} className="m-4" />
              </button>
              <Currency
                label={'Converted to'}
                country={'us'}
                currencyValue={'USD'}
                dialog={dialog}
                setDialog={setDialog}
                handleCurrencyClick={handleCurrencyClick}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
