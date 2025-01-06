import { UserProfile } from "./components/UserProfile"

export default function App() {
    const callMe = () => {
        console.log("hello");
    };
    
    return (
        <UserProfile 
            username="Bob"
            age={20}
            isLoggedIn={false}
            favouriteFoods={
                [
                    {
                        name: "Pizza",
                        id: 1
                    },
                    {
                        name: "Burger",
                        id: 2
                    },                    
                    {
                        name: "Shawarma",
                        id: 3
                    }
                ]
            }
            callMe={callMe}
        />
        )
}