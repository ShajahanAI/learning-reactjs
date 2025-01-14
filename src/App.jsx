import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log('Rendering...');
    document.title = "React Tutorial " + counter;
  }, [sync])

  return (
    <div>
      <div>You clicked this button {counter} times</div>
      <br />
      <button onClick={() => setCounter((currentCounter) => currentCounter + 1)}>
        Click Me
      </button>
      <button onClick={() => setSync((currentSync) => !currentSync)}>
        Sync
      </button>
    </div>
  );
}
