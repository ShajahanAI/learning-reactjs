import { UserUsername } from "./UserUsername"
import { UserFavouriteFoods } from "./UserFavouriteFoods"
import PropTypes from "prop-types";

export function UserProfile(props) {
    console.log(props);
    props.callMe();
    return <>
            <b>Age: </b>
            <span>{props.age}</span>
            <>
                <UserUsername username={props.username}/>
                <UserFavouriteFoods/>
            </>
           </>
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool,
    favouriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}