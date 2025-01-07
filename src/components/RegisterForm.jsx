export function RegisterForm() {
    return (
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" />
            </div>
            <div>
                <label htmlFor="displayName">Display Name</label>
                <input id="displayName" />
            </div>
        </form>
    )
}