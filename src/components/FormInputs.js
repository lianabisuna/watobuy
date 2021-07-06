import { useEffect } from "react";
import useFocus from "../hooks/useFocus";

const FormInputs = ({ onSubmit, item, setItem, price, setPrice, editItem, setEditItem }) => {
  const [inputRef, setInputFocus] = useFocus();

  const handleSubmit = e => {
    e.preventDefault();

    if (!editItem) {
      onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: item,
        isActive: true,
        quantity: 1,
        price: price,
        createdAt: Date.now()
      });
  
      setItem('');
      setPrice('');
      setInputFocus();
    }
    else {
      onSubmit({
        id: editItem.id,
        text: item,
        isActive: true,
        quantity: editItem.quantity,
        price: price,
        createdAt: Date.now()
      });

      setItem('');
      setPrice('');
      setEditItem(null);
      setInputFocus();
    }
  };

  useEffect(() => {
    if (editItem) {
      setItem(editItem.text);
      setPrice(editItem.price/editItem.quantity || '');
      setInputFocus();
    }
    else {
      setItem('');
      setPrice('');
    }

    return () => {
      //
    }
  }, [setItem, editItem, setPrice])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex px-5 py-3 relative">
          {/* item */}
          <input
            type="text"
            value={item}
            onChange={e => setItem(e.target.value)}
            className={`font-bold w-2/3 rounded-l-lg h-12 border-t-2 border-l-2 border-b-2 px-3 ${editItem?'border-green-400':'border-yellow-400'} outline-none`}
            placeholder="Item"
            autoFocus
            required
            ref={inputRef}
          />
          {/* price */}
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className={`font-bold w-1/3 h-12 border-t-2 border-l-2 border-b-2 px-3 ${editItem?'border-green-400':'border-yellow-400'} outline-none`}
            placeholder="Price"
          />
          {/* button */}
          <div>
            <button className={`${editItem?'bg-green-400 hover:bg-green-500':'bg-yellow-400 hover:bg-yellow-500'} h-12 rounded-r-lg px-5 text-white font-bold`}>
              { editItem?'Edit':'Add' }
            </button>
          </div>
          {editItem &&
            <button className="absolute text-white font-bold right-3 top-2 bg-red-500 hover:bg-red-600 h-6 w-6 rounded-full flex items-center justify-center">×</button>
          }
        </div>
      </form>
    </div>
  );
}
 
export default FormInputs;