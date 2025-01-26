import { func } from "prop-types";
import { useState, useEffect, useDeferredValue } from "react";
import { LoginForm } from "./components/LoginForm";

export default function App() {
  const [toggle, setToggleState] = useState(false);

  return (
     <div>
      <button onClick={(e) => {
        setToggleState((currentToggleState) => !(currentToggleState));
        console.log(toggle)
      }}>Toggle</button>

      {toggle && <LoginForm/>}
     </div>
  )
}
