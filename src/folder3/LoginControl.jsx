import React, {useState} from "react";
import button from "bootstrap/js/src/button";
import Greeting from "./Greeting";
import UserStatus from "./UserStatus";

//파일 나눌 것을 한번에 넣어 둠.



function LoginButton(props) {
    return (
            <button className={"btn btn-outline-info"} type={"button"} onClick={props.onClick}> LogIn </button>
    );
}

function LogoutButton(props) {
    return (
            <button className={"btn btn-outline-success"} type={"button"} onClick={props.onClick}> Log Out </button>
    );
}


function LoginControl(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLoginClick = () => {setLoggedIn(true);}

    const handleLogOutClick = () => {setLoggedIn(false);}


    //엘리먼트 변수 : 자바스크립트 변수에 리엑트 컴포넌트를 저장
    //조건부 렌더링을 사용하기 위해서 자바스크립트 변수 button에 리액트 컴포넌트를 저장
    let button;
    //일반변수

    //state의 상태에 따라 엘리먼트 변수에 저장될 리엑트 컴포넌트를 변경
    if (isLoggedIn) {
        //값 확인
        button = <LoginButton onClick={handleLogOutClick}/>
        //true 일 경우 Logout
    } else {
        button = <LogoutButton onClick={handleLoginClick}/>
        //false 일 경우 Login
    }

    return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {/*엘리먼트 변수에 저장된 리엑트 컴포넌트가 출력됨*/}
                {button}
                {isLoggedIn ? <LogoutButton onClick={handleLogOutClick}/> : <LoginButton onClick={handleLoginClick}/> }
                <UserStatus isLoggedIn={isLoggedIn}/>
            {/*  isLoggedIn 값 따라서 둘 중 하나가 출력  */}
            </div>
    );
}

export default LoginControl;