const Header = () => {
  return (
    <div className="flex items-center p-2 lg:p-5 justify-between font-bold">
      {/* clear */}
      <span className="hover:text-red-500 cursor-pointer">Clear</span>
      {/* title */}
      <span className="text-2xl uppercase">
        <span className="border-yellow-400 border-b-4 border-l-4 border-t-4 px-1">wato</span>
        <span className="text-white bg-yellow-400 py-1 px-2">buy?</span>
      </span>
      {/* reset */}
      <span className="hover:text-red-500 cursor-pointer">Reset</span>
    </div>
  );
}
 
export default Header;