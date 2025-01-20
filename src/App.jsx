import { useState, useEffect, useDeferredValue } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log('Rendering...');
    document.title = "React Tutorial " + counter;
  }, [sync])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
      })
  })

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
