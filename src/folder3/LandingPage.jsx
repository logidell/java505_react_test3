import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    //isLoggedIn을 state로 설정
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //클릭 이벤트 시 사용할 함수 생성  -- > state 값 수정을 위한 함수 생성을 해줌.
    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false)
    }
    return (<div>
                <Toolbar isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout}/>
                <div style={{padding: 16}}> check banner</div>
            </div>
    )
}

export default LandingPage;