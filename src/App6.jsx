import React from 'react';
import Goal from "./folder3/Goal";
import Greeting from "./folder3/Greeting";
import LoginControl from "./folder3/LoginControl";
import MailBox from "./folder3/MailBox";
import Counter from "./folder3/Counter";
import MainPage from "./folder3/MainPage";
import LandingPage from "./folder3/LandingPage";
import AttendanceBook from "./folder3/AttendanceBook";
import NameForm from "./folder3/NameForm";
import RequestForm from "./folder3/RequestForm";
import FruitSelect from "./folder3/FruitSelect";
import Reservation from "./folder3/Reservation";
import Parent from "./folder3/Parent";
import Parent2 from "./folder3/Parent2";


function App6() {
    return (
            <div className={"container mt-5 mb-5"}>
                <Goal isGoal={true}/>
                <hr/>
                <Greeting isLoggedIn={false}/>
                <hr/>
                <LoginControl/>
                <MailBox unreadMessages={0}/>
                <Counter/>
                <hr/>
                <MainPage/>
                <hr/>
                <LandingPage/>
                <hr/>
                <AttendanceBook/>
                <hr/>
                <NameForm/>
                <hr/>
                <RequestForm/>
                <hr/>
                <FruitSelect/>
                <hr/>
                <Reservation/>
                <hr/>
                <Parent/>
                <hr/>
                <Parent2/>

            </div>
    )
}

export default App6;