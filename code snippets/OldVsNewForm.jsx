//------------- PRE REACT 19 WAY ---------------
// import { useState } from "react";
// const Form = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
 
// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email, password);
// };
 
// const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//     console.log(email);
// };
 
// const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//     console.log(password);
// };
// return (
//     <section>
//         <form onSubmit={handleSubmit} id="my-form">
//             <label htmlFor="email">Email: </label>
//             <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={handleChangeEmail}
//             />
//             <label htmlFor="password">Password: </label>
//             <input
//                 type="text"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={handleChangePassword}
//             />
//             <button type="submit">Submit</button>
//         </form>
//     </section>
// );
//------------- PRE REACT 19 WAY ---------------
 
//------------- REACT 19 WAY ---------------
const Form = () => {
    const logIn = (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        console.log(email, password);
    };
 
    return (
        <section>
            <form action={logIn} id="my-form">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" />
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};
//------------- REACT 19 WAY ---------------
 
export default Form;