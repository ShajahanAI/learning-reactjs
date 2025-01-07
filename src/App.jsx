export default function App() {
    const isAuthenticated = true;

    return  isAuthenticated ? (
                <div>
                    <h1>Welcome new user</h1>
                </div> 
            ) : (
                <div>
                    <span>You are not logged in</span>
                </div>
            );

}