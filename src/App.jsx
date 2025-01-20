import { func } from "prop-types";
import { useState, useEffect, useDeferredValue } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log("Rendering...");
    document.title = "React Tutorial " + counter;
  }, [sync]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "GET",
            signal: controller.signal
          }
        );

        const json = await response.json();
        console.log(json);
        console.log(controller.signal);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUsers();
    return () => {
      controller.abort();
      console.log(controller.signal);
    }
  });

  return (
    <div>
      <div>You clicked this button {counter} times</div>
      <br />
      <button
        onClick={() => setCounter((currentCounter) => currentCounter + 1)}
      >
        Click Me
      </button>
      <button onClick={() => setSync((currentSync) => !currentSync)}>
        Sync
      </button>
    </div>
  );
}
