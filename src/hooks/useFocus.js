import { useRef } from "react";

const useFocus = () => {
  const elRef = useRef(null);
  const setFocus = () => {elRef.current && elRef.current.focus()};
  return [ elRef, setFocus ];
}
 
export default useFocus;