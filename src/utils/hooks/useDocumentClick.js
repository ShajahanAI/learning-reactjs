import { useEffect } from "react";

export function useDocumentClick() {
  return useEffect(() => {
    const clickHandler = () => {
      console.log("click has been sensed.");
    };

    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
      console.log("Removed Click Listener");
    };
  }, []);
}
