import React from "react";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {return(<UserGreeting/>)}

    return (<GuestGreeting/>)
}

function UserGreeting(props){
    return(
            <div> Welcome Back! </div>
    )
}

function GuestGreeting(props){
    return(<div>Need Sign Up </div>)
}
export default Greeting;