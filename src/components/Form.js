import { useState } from "react";

const Form = () => {
  let [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex px-5 py-3">
          {/* item */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="font-bold w-2/3 rounded-l-lg h-12 border-t-2 border-l-2 border-b-2 px-3 border-yellow-400 outline-none"
            placeholder="Item"
          />
          {/* price */}
          <input
            type="text"
            className="font-bold w-1/3 h-12 border-t-2 border-l-2 border-b-2 px-3 border-yellow-400 outline-none"
            placeholder="Price"
          />
          {/* button */}
          <div>
            <button className="bg-yellow-400 h-12 hover:bg-yellow-500 rounded-r-lg px-5 text-white font-bold">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}
 
export default Form;