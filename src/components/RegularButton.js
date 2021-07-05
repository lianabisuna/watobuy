const RegularButton = ({ icon, color, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`rounded-full h-10 w-10 hover:bg-${color}-100 flex items-center justify-center`}
    >
      { icon }
    </button>
  );
}
 
export default RegularButton;