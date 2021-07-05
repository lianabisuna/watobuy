import './App.css';
import Header from './components/Header';
import Record from './components/Record';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* background */}
      <main className="bg-gray-900 h-screen flex lg:items-center lg:justify-center">
        {/* card */}
        <div className="bg-white lg:rounded-lg lg:h-5/6 lg:w-1/3 w-full flex flex-col">
          {/* header */}
          <Header />
          {/* record */}
          <div className="flex-grow">
            <Record />
          </div>
          {/* footer */}
          <Footer
            checkedAmount="67"
            activeAmount="156"
            checkedTotal="3"
            totalItems="2"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
