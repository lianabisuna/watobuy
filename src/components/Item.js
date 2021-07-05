import CircleButton from "./CircleButton";
import RegularButton from "./RegularButton";

const Item = ({ id, item, active, quantity, price, edit=true }) => {
  return (
    <div className={`relative h-14 pl-1 ${active?'hover:bg-yellow-200':'hover:bg-gray-300'} rounded-lg flex ${active?'bg-yellow-100':'bg-gray-200'} cursor-pointer`}>
      {/* overlay */}
      {!active && <div className="absolute w-full h-full bg-white left-0 z-10 opacity-40"></div>}
      
      <div className="gap-3 flex items-center">
        {/* line */}
        <div className={`w-3 h-12 rounded-full ${active?'bg-yellow-400':'bg-gray-400'}`}></div>
        {/* item */}
        <span className={`text-lg font-bold ${!active?'line-through':''}`}>{ item }</span>
        {/* price */}
        <span className="text-gray-500">₱{ price }</span>
      </div>

      <div className="ml-auto flex items-center pr-3">
        <div className="rounded-full mr-3 bg-yellow-300 gap-1 p-1 flex items-center justify-center">
          {/* increase */}
          <CircleButton
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
              </svg>
            }
          />
          {/* quantity */}
          <span>{ quantity }</span>
          {/* decrease */}
          <CircleButton
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            }
          />
        </div>

        {/* edit */}
        <RegularButton
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          }
          color="green"
        />

        {/* delete */}
        <RegularButton
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          color="red"
        />
      </div>
    </div>
  );
}
 
export default Item;