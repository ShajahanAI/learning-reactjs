export default function App() {
    // NOT_VERIFIED | VERIFIED | ACCOUNT_DISABLED
    const USER_STATUS = "VERIFIED";
    
    switch (USER_STATUS) {
        case "NOT_VERIFIED":
            return (
                <div>
                    <span>
                        You are not verified. Please verify your Email or Mobile Number.
                    </span>
                </div>
            );
        case "VERIFIED":
            return (
                <div>
                    <span>
                        You are verified. Congrates! Click here to access your dashboard.
                    </span>
                </div>
            )
        case 'ACCOUNT_DISABLED':
            return (
                <div>
                    <span>Your account is disabled</span>
                </div>
            )
        default:
            return (
                <div>
                    <span>
                        Please contact a system admin.
                    </span>
                </div>
            )
    }
}