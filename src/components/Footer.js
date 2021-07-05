import Label from "./Label";

const Footer = ({ checkedAmount, activeAmount, checkedTotal, totalItems }) => {
  return (
    <div className="flex items-center p-2 lg:p-5 justify-between">
      {/* label */}
      <div className="flex gap-3 items-center">
        <Label
          color="gray"
          number={checkedAmount}
        />
        <Label
          color="yellow"
          number={activeAmount}
        />
      </div>
      {/* count */}
      <span className="font-bold">{ checkedTotal } of { totalItems }</span>
    </div>
  );
}
 
export default Footer;