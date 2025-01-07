import { useState } from "react";

export function RegisterForm() {
    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
        displayName: ""
    });

    // const isDisabled = !username || !password || !displayName;
    // console.log(username, password, displayName, !username || !password || !displayName);

    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" value={formFields.username} onChange={(e) => {
                    setFormFields((currentState) => {
                        return {
                            ...currentState,
                            username: e.target.value,
                        }
                    })
                }}/>
            </div>
            <br />
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" value={formFields.password} onChange={(e) => {
                    setFormFields((currentState) => {
                        return {
                            ...currentState,
                            password: e.target.value,
                        }
                    })
                }}/>
            </div>
            <br />
            <div>
                <label htmlFor="displayName">Display Name</label>
                <input id="displayName" value={formFields.displayName} onChange={(e) => {
                    setFormFields((currentState) => {
                        return {
                            ...currentState,
                            displayName: e.target.value,
                        }
                    })
                }}/>
            </div>
            <br />
            {/* <button disabled={isDisabled}>Register</button> */}
        </form>
    )
}