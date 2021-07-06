import { useState } from "react";

const CardHeader = ({ handleClear, handleReset }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-center justify-center p-2 lg:p-5 font-bold relative">
      {/* clear */}
      <span
        className="hover:text-red-500 cursor-pointer absolute left-2 lg:left-5"
        onClick={() => handleClear()}
      >
        Clear
      </span>
      {/* title */}
      <span className="text-2xl uppercase">
        <span className="border-yellow-400 border-b-4 border-l-4 border-t-4 px-1">wato</span>
        <span className="text-white bg-yellow-400 py-1 px-2">buy?</span>
      </span>
      {/* reset */}
      <div className="flex items-center gap-3 absolute right-2 lg:right-5">
        <span
          className={`${counter > 0?'hover:text-green-500':'hover:text-red-500'} cursor-pointer`}
          onClick={() => {
            if (counter) {
              handleReset();
              setCounter(0);
            }
            else {
              setCounter(prev => prev + 1);
            }
          }}
        >
          {counter > 0?'Confirm':'Reset'}
        </span>
        {counter > 0 &&
          <button
            onClick={() => setCounter(0)}
            className="absolute -left-6 text-white font-bold bg-red-500 hover:bg-red-600 h-4 w-4 text-xs rounded-full flex items-center justify-center"
          >
            ×
          </button>
        }
      </div>
    </div>
  );
}
 
export default CardHeader;