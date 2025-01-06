import { UserDetails } from "./components/UserDetails";

export default function App() {
    const mockUsers = [
        {
            id: 1,
            username: "anson",
            email: "anson@ansonthedev.com"
        },
        {
            id: 2,
            username: "michael",
            email: "michael@ansonthedev.com"
        }
    ]

    return <div>
        {mockUsers.map(
            (user) => {
                return <UserDetails key={user.id} user={user}/>
            })}
        </div>;
        

}