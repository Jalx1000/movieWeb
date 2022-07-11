import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="sm:grid sm:grid-col-3 sm:gap-4:sm:items-start sm:border-t sm:border-gray-200 sm:pt-5:pt-5">
        <label htmlFor="username" className='block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2'>
          Username
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-lg flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              workcation.com/
            </span>
            <input 
              type="text" 
              name="username"
              id="username"
              autoComplete="username"
              className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
