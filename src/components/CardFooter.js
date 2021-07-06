import { useEffect, useState } from "react";
import LegendLabel from "./LegendLabel";

const CardFooter = ({ items }) => {
  const [checkedAmount, setCheckedAmount] = useState(0);
  const [activeAmount, setActiveAmount] = useState(0);
  const [checkedTotal, setCheckedTotal] = useState(0);

  useEffect(() => {
    if (items.length) {
      let checkedItemAmount = items.reduce((a, b) => {
        if (!b.isActive) {
          return a + (b.price * b.quantity);
        }
      }, 0);
      setCheckedAmount(checkedItemAmount);

      let activeItemAmount = items.reduce((a, b) => {
        if (b.isActive) {
          return a + (b.price * b.quantity);
        }
      }, 0);
      setActiveAmount(activeItemAmount);

      let totalItemsChecked = items.filter(item => !item.isActive).length;
      setCheckedTotal(totalItemsChecked);
    }
    return () => {
      //
    }
  }, [items, checkedAmount])

  return (
    <div className="flex items-center p-2 lg:p-5 justify-between">
      {/* label */}
      <div className="flex gap-3 items-center">
        <LegendLabel
          color="gray"
          number={checkedAmount || 0}
        />
        <LegendLabel
          color="yellow"
          number={activeAmount || 0}
        />
      </div>
      {/* count */}
      <span className="font-bold">{ checkedTotal } of { items.length }</span>
    </div>
  );
}
 
export default CardFooter;