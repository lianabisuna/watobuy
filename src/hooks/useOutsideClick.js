import { useEffect, useRef } from "react";

const useOutsideClick = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let handleOutsideClick = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  });

  return domNode;
};

export default useOutsideClick;