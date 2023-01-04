import React from "react";
import Profile from "./Profile";


//props : 컴포넌트 간의 데이터 전달을 위해서 사용하는 자바스크립트 객체, 읽기 전용
//부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달 시 사용
//부모 컴포넌트에서 자식 컴포넌트를 호출하여 사용시 속성을 사용하여 데이터를 전달.
//부모 컴포넌트에서 사용한 속성 명이 자식 컴포넌트의 props 객체에 담겨 전달한다.
//해당 속성명을 자식 컴포넌트에서 그대로 사용
function ProfileList() {
    return (
            <div>
                <div className={"row"}>
                    <div className={"col-sm-6 mx-auto p-3"}>
                        <Profile userId={"test1"} userName={"테스터1"} userTel={"01000000000"} userEmail={"test@te.com"}/>
                        <Profile userId={"test2"} userName={"테스터2"} userTel={"01011111111"} userEmail={"test2@te.com"}/>
                    </div>
                </div>
            </div>
    )
}

export default ProfileList;