export default function App() {
    // NOT_VERIFIED | VERIFIED | ACCOUNT_DISABLED
    const USER_STATUS = null;

    if (USER_STATUS === "NOT_VERIFIED") {
        return (
            <div>
                <span>
                    You are not verified. Please verify your Email or Mobile Number.
                </span>
            </div>
        );
    }

    else if (USER_STATUS === "VERIFIED") {
        return (
            <div>
                <span>
                    You are verified. Congrates! Click here to access your dashboard.
                </span>
            </div>
        )
    }
    else if (USER_STATUS == 'ACCOUNT_DISABLED') {
        return (
            <div>
                <span>Your account is disabled</span>
            </div>
        )
    }
    else {
        return (
            <div>
                <span>
                    Please contact a system admin.
                </span>
            </div>
        )
    }

}