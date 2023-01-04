import React from "react";


// function Profile(props) {
//     let data= props;
//
//
//     let userId=props.userId;
//     let userName=props.userName;
//     let userTel=props.userTel;
//     let userEmail=props.userEmail;
//     //변수로 만들어 넣기
//
function Profile({userId,userName,userEmail, userTel}) {
    //확장표현식  : 대입 연산자 오른쪽의 데이터를 연산자 왼쪽의 변수에 저장하는 방식
    // {userId,userName,userEmail, userTel} : {prop.userId,prop.userName,prop.userEmail,prop.tel}
    //



    return (
            <div>
                <div className={"border rounded-3 py-3 p-4 m-3"}>
                <div>
                    <label form={"user-id"} className={"form-label"}> ID : </label>
                    {/*<input id={"user-id"} className={"form-control"} value={props.userId} type={"text"} />*/}
                    <input id={"user-id"} className={"form-control"} value={userId} type={"text"} />
                </div>
                <div>
                    <label form={"user-name"} className={"form-label"}> Name : </label>
                    <input id={"user-name"} className={"form-control"} value={userName} type={"text"} />
                </div>
                <div>
                    <label form={"user-tel"} className={"form-label"}> Ph : </label>
                    <input id={"user-tel"} className={"form-control"} value={userTel} type={"tel"} />
                </div>
                <div>
                    <label form={"user-email"} className={"form-label"}> E-mail : </label>
                    <input id={"user-email"} className={"form-control"} value={userEmail} type={"email"} />
                </div>
                </div>
            </div>
    )
}

export default Profile;