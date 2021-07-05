import Item from './Item';
import Form from './Form';

const Record = () => {
  const items = [
    { id: 1, text: 'Onion', isActive: true, quantity: 3, price: 100 },
    { id: 3, text: 'Apple', isActive: true, quantity: 2, price: 60 },
    { id: 2, text: 'Shrimp', isActive: false, quantity: 1, price: 54 }
  ];

  return (
    <div>
      <Form />
      <div className="p-5 space-y-2">
        {items.map((item) =>
          <Item
            id={item.id}
            item={item.text}
            active={item.isActive}
            quantity={item.quantity}
            price={item.price}
          />
        )}
      </div>
    </div>
  );
}
 
export default Record;