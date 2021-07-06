const CircleButton = ({ icon, handleClick }) => {
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      className="hover:bg-yellow-400 bg-yellow-300 h-6 w-6 rounded-full items-center flex justify-center"
    >
      { icon }
    </span>
  );
}
 
export default CircleButton;