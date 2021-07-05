const Label = ({ color, number }) => {
  return (
    <div className="flex items-center gap-1">
      {/* legend */}
      <div className={`rounded-full h-4 w-4 bg-${color}-400`}></div>
      {/* label */}
      <div>₱<span className="font-bold">{ number }</span></div>
    </div>
  );
}
 
export default Label;