import Currency from './components/Currency';
import { HiOutlineSwitchHorizontal, HiOutlineSwitchVertical } from 'react-icons/hi';

function App() {
  return (
    <>
      <div className="bg-green-900 p-4 md:p-20">
        <div className="mb-4">
          <h1 className="text-6xl font-black text-green-400 mb-4">currency converter</h1>
          <h2 className="text-2xl text-green-400">convert from one currency to another</h2>
        </div>
        <div className="bg-white p-12 rounded-2xl">
          <div className="flex flex-col items-center md:flex md:flex-row md:justify-evenly md:items-center">
            <Currency label={'Amount'} country={'uk'} currencyValue={'GBP'} />
            <button className="mt-4">
              <HiOutlineSwitchVertical size={30} className="m-4" />
            </button>
            <Currency label={'Converted to'} country={'us'} currencyValue={'USD'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
