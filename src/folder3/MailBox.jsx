import React from "react";

function MailBox(props){
    const unreadMessages = props.unreadMessages;

    //inline if : jsx 문법으로 렌더링을 진행하는 render() 함수 내부에서 if문을 사용할 수 없기 때문에 ' &&'
    //            를 사용하거나 삼항 연산자를 사용해 조건부 렌더링을 진행할 수 있음.

    //&&연산 사용 시 주의할 점
    //&& 연산자 오른쪽에 있는 데이터(피연산자)는 왼쪽에 있는 데이터(피연산자) 값에 따라 렌더링이 결정된다.
    //&& 연산자 왼쪽의 피연산자 값이 false일 경우 오른쪽의 피연산자는 연산 평가자체가 동작하지 않음(아예 안들어감.)
    //&& 연산자의 왼쪽의 피연산자는 연산 평가가 이뤄지기 때문에 해당 값이 그대로 출력됨.
    // = > 그래서 Counter의 counter 값(0)이 그대로 화면에 출력된 것.


    return(
            <div>
                <h1>Hi</h1>
                <h3>inLine if (&& 연산자 테스트)</h3>
                {unreadMessages > 0 && <h2>현재 {unreadMessages} 개의 읽지 않은 메시지</h2>}
            </div>
    );
}
export default MailBox;