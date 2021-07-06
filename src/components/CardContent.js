import ItemList from './ItemList';
import FormInputs from './FormInputs';
import { useState } from 'react';

const CardContent = ({ items, setItems }) => {
  let [item, setItem] = useState('');
  let [price, setPrice] = useState('');
  let [editItem, setEditItem] = useState(false);
  
  // ADD ITEM
  const addItem = item => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    let newItems = [item, ...items];

    setItems(newItems);
  };

  // UPDATE STATUS
  const toggleItem = id => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.isActive = !item.isActive;
      }

      return item;
    });

    updatedItems.sort((a, b) => {
      if (a.isActive === b.isActive) {
        return b.createdAt - a.createdAt;
      } else if (a.isActive || !b.isActive) {
        return -1;
      } else if (b.isActive || !a.isActive) {
        return 1;
      }

      return 0;
    });
    
    setItems(updatedItems);
  };

  // DELETE ITEM
  const deleteItem = id => {
    let filteredItems = [...items].filter(item => item.id !== id);

    setItems(filteredItems);
  };

  const handleEdit = id => {
    let updatedItems = items.filter(item => item.id !== id);

    let selectedItem = items.find(item => item.id === id);

    setItems(updatedItems);
    setEditItem(selectedItem);
  };

  // INCREASE QUANTITY
  const increaseQty = (id) => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        item.quantity++;
        let prevPrice = item.price;
        item.price = prevPrice * item.quantity;
      }

      return item;
    })

    setItems(updatedItems);
  };

  // DECREASE QUANTITY
  const decreaseQty = (id) => {
    let updatedItems = items.map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          item.quantity--;
          let prevPrice = item.price;
          item.price = prevPrice * item.quantity;
        }
      }

      return item;
    })

    setItems(updatedItems);
  };

  return (
    <div>
      <FormInputs
        onSubmit={addItem}
        item={item}
        setItem={setItem}
        price={price}
        setPrice={setPrice}
        editItem={editItem}
        setEditItem={setEditItem}
      />
      <ItemList
        items={items}
        toggleItem={toggleItem}
        deleteItem={deleteItem}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        handleEdit={handleEdit}
        editItem={editItem}
        setEditItem={setEditItem}
      />
    </div>
  );
}
 
export default CardContent;