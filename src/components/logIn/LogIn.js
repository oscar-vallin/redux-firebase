import React from 'react';
import {signGoogleAction, logOutGoogle} from '../../redux/usersDuck';
import {connect} from 'react-redux';

const LogIn = ({log, logOutGoogle, displayName}) => {
    const logIn = () => log();
    const logOut = () => logOutGoogle();
    console.log(displayName)
    return(
        <div>
            <h1>Welcome {displayName}</h1>
            <h2>Start Session</h2>
            <button onClick={logIn}>Log In</button>
            <h2>Sign off</h2>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}
const mapState = ({user:{fetching, loggedIn, displayName}}) => {
    return {
        fetching,
        loggedIn,
        displayName
    }
}
export default connect(mapState, {log: signGoogleAction, logOutGoogle})(LogIn);