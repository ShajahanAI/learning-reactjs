import { useEffect } from "react";
import { useDocumentClick } from "../utils/hooks/useDocumentClick"

export function LoginForm() {
    useEffect(() => {
        const resizeHandler = () => {
          console.log("Window has been resized")
        }
  
        window.addEventListener("resize", resizeHandler);
        return () => {
          window.removeEventListener("resize", resizeHandler);
          console.log('Removed Resize Listener');
        }
      }, [])

      useDocumentClick();

    return  <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const username = formData.get('username');
                    const password = formData.get('password');
                }}>
                <label htmlFor="username">Username</label>
                <br />
                <input id="username" name="username" onChange={(e) => {
                    console.log(`Username: ${e.target.value}`);
                }}/>
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input id="password" type="password" name="password" onChange={(e) => {
                    console.log(`Password: ${e.target.value}`);
                }}/>
                <br />
                <br />
                <button>Login</button>
            </form>
}