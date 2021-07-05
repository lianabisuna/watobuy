const CircleButton = ({ icon, handleClick }) => {
  return (
    <span
      onClick={handleClick}
      className="hover:bg-yellow-400 h-6 w-6 rounded-full items-center flex justify-center"
    >
      { icon }
    </span>
  );
}
 
export default CircleButton;