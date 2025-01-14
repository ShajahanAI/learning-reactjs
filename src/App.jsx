import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "anson",
      email: "anson@gmail.com",
    },
    {
      id: 2,
      username: "bob",
      email: "bob@gmail.com",
    },
  ]);

  return (
    <div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button
          onClick={(e) => {
            const newUser = {
              id: counter,
              username,
              email,
            };
            setCounter((currentCounter) => currentCounter++);
            console.log(newUser, counter);
            setUsers((currentUsers) => [...currentUsers, newUser]);
          }}
        >
          Add User
        </button>
      </form>
      <br />
      <div>
        {users.map((user) => (
          <UserDetails key={user.id} user={user} setUsers={setUsers} />
        ))}
        <br />
      </div>
    </div>
  );
}
