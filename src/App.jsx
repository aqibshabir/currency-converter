import Currency from './components/Currency';

function App() {
  return (
    <>
      <div className="bg-green-900 p-20">
        <div className="mb-4">
          <h1 className="text-6xl font-black text-green-400 mb-4">currency converter</h1>
          <h2 className="text-2xl text-green-400">convert from one currency to another</h2>
        </div>
        <div className="bg-white p-12 rounded-2xl">
          <div className="flex justify-evenly">
            <Currency />
            <button>switch</button>
            <Currency />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
