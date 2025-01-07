import { useEffect, useState } from 'react';
import Currency from './components/Currency';
import { currencies } from './controllers/currencies';
import { HiOutlineSwitchHorizontal, HiOutlineSwitchVertical } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { IoIosSearch } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';
import { PiCurrencyEthFill } from 'react-icons/pi';
import { CircleFlag } from 'react-circle-flags';

function App() {
  const [dialogOne, setDialogOne] = useState(false);
  const [dialogTwo, setDialogTwo] = useState(false);
  const [countries] = useState(currencies);
  const [countryOne, setCountryOne] = useState({ codeName: 'uk', cc: 'GBP' });
  const [countryTwo, setCountryTwo] = useState({ codeName: 'us', cc: 'USD' });
  const [input, setInput] = useState('');
  const [currencyOneInput, setCurrencyOneInput] = useState('');
  const [currencyTwoInput, setCurrencyTwoInput] = useState('');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [currencyData, setCurrencyData] = useState({});

  useEffect(() => {
    if (dialogOne || dialogTwo) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [dialogOne, dialogTwo]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      let response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${countryOne.cc.toLowerCase()}.json`
      );
      if (!response.ok) {
        throw Error('API is down - try again!');
      }
      response = await response.json();
      const data = response[countryOne.cc.toLowerCase()];
      setCurrencyData(data);
      setCurrencyOneInput(1);
      const dataTwo = data[countryTwo.cc.toLowerCase()];
      setExchangeRate(Math.round(dataTwo * 100) / 100);
      setCurrencyTwoInput(Math.round(dataTwo * 100) / 100);
    }

    fetchData();
    return () => controller.abort();
  }, [countryOne]);

  const handleCurrencyClick = (dialogId) => {
    if (dialogId === 'amount') {
      setDialogOne(!dialogOne);
      setDialogTwo(false);
      setInput('');
    } else if (dialogId === 'converted') {
      setDialogTwo(!dialogTwo);
      setDialogOne(false);
      setInput('');
    }
  };

  const handleCurrencySearch = (value) => {
    setInput(value);
  };

  const handleCurrencyChange = (dialogId, codeName, cc) => {
    if (dialogId === 'amount') {
      setCountryOne({ codeName, cc });
      setDialogOne(false);
    } else if (dialogId === 'converted') {
      setCountryTwo({ codeName, cc });
      setDialogTwo(false);
    }
  };

  const handleSwitchingCountries = (countryOne, countryTwo) => {
    setCountryOne(countryTwo);
    setCountryTwo(countryOne);
  };

  const filteredCountries = countries.filter((country) =>
    country.codeName.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div
      className="bg-[#ecefeb]"
      onClick={() => {
        setDialogOne(false);
        setDialogTwo(false);
        setInput('');
      }}
    >
      <nav className="bg-black p-2 flex items-center">
        <PiCurrencyEthFill className="text-[#cbff7c] size-14 sm:size-12 p-1" />
      </nav>
      {dialogOne && (
        <>
          <div
            className="w-full h-[90%] top-[10%] sm:w-[20rem] lg:w-[30rem] sm:h-72 lg:h-[24rem] sm:top-0 sm:right-1/2 sm:translate-y-[20.5rem] lg:translate-y-[24.25rem] sm:translate-x-[2rem] shadow-md bg-white absolute rounded-3xl"
            onClick={(e) => {
              e.stopPropagation(e);
            }}
          >
            <div className="flex justify-end">
              <button
                className="m-4 rounded-full hover:bg-gray-200 p-2"
                onClick={() => handleCurrencyClick('amount')}
              >
                <RxCross2 size={18} className="" />
              </button>
            </div>
            <div className="border focus-within:border-[3px] border-black m-4 h-10 rounded-lg flex justify-start items-center mb-2">
              <span>
                <IoIosSearch size={25} className="ml-2" />
              </span>
              <input
                autoFocus={true}
                type="text"
                className="rounded-lg pl-2 w-full"
                placeholder="Search..."
                value={input}
                onChange={(e) => handleCurrencySearch(e.target.value)}
              />
            </div>
            <div>
              <ul
                name=""
                id=""
                className="overflow-y-auto h-[34rem] sm:h-[8rem] lg:h-[14rem] mx-2 mt-4"
              >
                {filteredCountries.map((country) => (
                  <li
                    key={country.codeName}
                    className="flex items-center justify-between border border-white rounded-xl hover:border-black/70 p-3"
                    onClick={() => {
                      if (country.cc === countryOne.cc) {
                        return;
                      }
                      if (country.cc === countryTwo.cc) {
                        handleSwitchingCountries(countryOne, countryTwo);
                      }
                      handleCurrencyChange('amount', country.codeName.toLowerCase(), country.cc);
                    }}
                  >
                    <span className="flex">
                      <CircleFlag
                        countryCode={country.codeName.toLowerCase()}
                        className="max-w-6 ml-4 mr-3"
                      />
                      <span className="tracking-wide font-light">{country.cc}</span>
                    </span>
                    {country.cc === countryOne.cc && (
                      <span className="">
                        <TiTick size={22} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      {dialogTwo && (
        <>
          <div
            className="w-full h-[90%] top-[10%] sm:w-[20rem] lg:w-[30rem] sm:h-72 lg:h-[24rem] sm:top-0 sm:right-0 sm:translate-y-[20.5rem] lg:translate-y-[24.25rem] shadow-md bg-white absolute rounded-3xl"
            onClick={(e) => {
              e.stopPropagation(e);
            }}
          >
            <div className="flex justify-end">
              <button
                className="m-4 rounded-full hover:bg-gray-200 p-2"
                onClick={() => handleCurrencyClick('converted')}
              >
                <RxCross2 size={18} className="" />
              </button>
            </div>
            <div className="border focus-within:border-[3px] border-black m-4 h-10 rounded-lg flex justify-start items-center mb-2">
              <span>
                <IoIosSearch size={25} className="ml-2" />
              </span>
              <input
                autoFocus={true}
                type="text"
                className="rounded-lg pl-2 w-full"
                placeholder="Search..."
                value={input}
                onChange={(e) => handleCurrencySearch(e.target.value)}
              />
            </div>
            <div>
              <ul
                name=""
                id=""
                className="overflow-y-auto h-[34rem] sm:h-[8rem] lg:h-[14rem] mx-2 mt-4"
              >
                {filteredCountries.map((country) => (
                  <li
                    key={country.codeName}
                    className="flex items-center justify-between border border-white rounded-xl hover:border-black/70 p-3"
                    onClick={() => {
                      if (country.cc === countryTwo.cc) {
                        return;
                      }
                      if (country.cc === countryOne.cc) {
                        handleSwitchingCountries(countryOne, countryTwo);
                      }
                      handleCurrencyChange('converted', country.codeName.toLowerCase(), country.cc);
                    }}
                  >
                    <span className="flex">
                      <CircleFlag
                        countryCode={country.codeName.toLowerCase()}
                        className="max-w-6 ml-4 mr-3"
                      />
                      <span className="tracking-wide font-light">{country.cc}</span>
                    </span>
                    {country.cc === countryTwo.cc && (
                      <span className="">
                        <TiTick size={22} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      <div className="bg-[#cbff7c] p-4 pb-24 sm:p-8 lg:p-20">
        <div className="mb-4">
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-black my-16 sm:my-8">
            CURRENCY CONVERTER
          </h1>
        </div>
        <div className="bg-white shadow-xl p-4 rounded-2xl">
          <div className="flex flex-col items-center sm:flex sm:flex-row sm:justify-evenly sm:items-center">
            <Currency
              label={'Amount'}
              codeName={countryOne.codeName}
              cc={countryOne.cc}
              handleCurrencyClick={handleCurrencyClick}
              inputOne={currencyOneInput}
              setInputOne={setCurrencyOneInput}
              inputTwo={currencyTwoInput}
              setInputTwo={setCurrencyTwoInput}
              exchangeRate={exchangeRate}
              setExchangeRate={setExchangeRate}
            />
            <button className="mt-4 sn:mt-0">
              <HiOutlineSwitchVertical
                size={30}
                className="m-4 sm:hidden"
                onClick={() => handleSwitchingCountries(countryOne, countryTwo)}
              />
              <HiOutlineSwitchHorizontal
                size={30}
                className="m-8 hidden sm:block"
                onClick={() => handleSwitchingCountries(countryOne, countryTwo)}
              />
            </button>
            <Currency
              label={'Converted to'}
              codeName={countryTwo.codeName}
              cc={countryTwo.cc}
              handleCurrencyClick={handleCurrencyClick}
              inputOne={currencyTwoInput}
              setInputOne={setCurrencyTwoInput}
              inputTwo={currencyOneInput}
              setInputTwo={setCurrencyOneInput}
              exchangeRate={exchangeRate}
              setExchangeRate={setExchangeRate}
            />
          </div>
          <div className="my-6 text-center text-xl font-semibold">
            <p>
              {`${currencyData[countryOne.cc.toLowerCase()]} ${countryOne.cc}`} ={' '}
              <span className="text-green-700">{`${(
                Math.round(currencyData[countryTwo.cc.toLowerCase()] * 1000) / 1000
              ).toFixed(3)}`}</span>{' '}
              {countryTwo.cc}
            </p>
            <p className="text-sm text-black/70 font-light">
              Exchange rate at{' '}
              {new Date().toLocaleTimeString('en-GB', {
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <h2 className="text-center text-4xl mt-8">TOP CURRENCIES TODAY</h2>
        <div className="h-80 bg-white rounded-xl m-8"></div>
      </div>
    </div>
  );
}

export default App;
