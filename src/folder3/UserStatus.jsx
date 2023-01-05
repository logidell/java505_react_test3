import React from "react";


function UserStatus(props) {



    const flag = props.isLoggedIn;
    if (flag){
        return <p>이 사용자는 현재 <b>로그인</b> 상태 입니다. </p>
    }else {
        return  <p>이 사용자는 현재 <b>로그인 하지 않은</b> 상태 입니다. </p>
    }

    // return (
            // <div>
            //     <p>이 사용자는 현재 <b>{props.isLoggedIn ? '로그인':'로그인하지 않은'}</b> 상태 입니다.</p>
            // </div>


            // Quest 1 ) 소스에서 삼항연산자를 사용한 부분을 if ~ else 문을 사용해 조건부 렌더링으로 수정
    // )
}

export default UserStatus;