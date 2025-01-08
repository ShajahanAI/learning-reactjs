import PropTypes from "prop-types";
import { useState } from "react";
export function UserDetails({ user, setUsers }) {
  const [isEditing, setEditState] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  return (
    <div>
      <b>ID: </b>
      <span>{user.id}</span>
      <br />
      <b>Username: </b>
      {isEditing ? (
        <input
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      ) : (
        <span>{user.username}</span>
      )}
      <br />
      <b>Email: </b>
      {isEditing ? (
        <input
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      ) : (
        <span>{user.email}</span>
      )}
      <br />
      <button onClick={() => setEditState((isEditing) => !isEditing)}>
        Edit
      </button>
      <button
        onClick={() =>
          setUsers((currentUsersState) => {
            let newUserState = currentUsersState.filter(
              (currentUser) => currentUser.id !== user.id
            );
            console.log(newUserState);
            return newUserState;
          })
        }
      >
        Delete
      </button>
      {isEditing ? (
        <button
          onClick={() => {
            setUsers((currentUsersState) => {
              let newUsersState = currentUsersState.map((currentUser) => {
                console.log(currentUser.id, "is", user.id);
                if (currentUser.id === user.id) {
                  console.log("Saving", currentUser.id, username, email, {
                    ...currentUser,
                    username,
                    email,
                  });
                  return { ...currentUser, username, email };
                } else return currentUser;
              });
              console.log(newUsersState);
              return newUsersState;
            });

            console.log("isEditing value is: ", isEditing);
            setEditState(false);
            console.log("isEditing value is: ", isEditing);
          }}
        >
          Save
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
