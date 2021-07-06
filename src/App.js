import './App.css';
import CardHeader from './components/CardHeader';
import CardContent from './components/CardContent';
import CardFooter from './components/CardFooter';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const clearItems = () => {
    let clearedItems = items.filter(item => item.isActive);
    setItems(clearedItems);
  };

  const resetItems = () => {
    setItems([]);
  };

  return (
    <div className="App">
      {/* background */}
      <main className="bg-gray-900 flex min-h-screen lg:py-10 lg:justify-center">
        {/* card */}
        <div className="bg-white lg:rounded-lg lg:w-1/3 w-full min-h-full flex flex-col">
          {/* header */}
          <CardHeader
            handleClear={clearItems}
            handleReset={resetItems}
          />
          {/* record */}
          <div className="flex-grow">
            <CardContent
              items={items}
              setItems={setItems}
            />
          </div>
          {/* footer */}
          <CardFooter
            items={items}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
