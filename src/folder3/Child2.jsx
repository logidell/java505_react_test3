import React from "react";

function Child2(props){
    //부모 컴포넌트에서 props를 전달받은 함수를 실행
    //부모 컴포넌트에서 전달받은 함수가 부모의 state를 수정할 수 있는 setState()함수이다.

    const sendData = () => {
        props.childValue('자식 데이터')
    }


    return(
            <div>
                <h3> Child2 Component Area </h3>
                {/*부모 컴포넌트에서 props를 통해 전달받은 데이터 출력*/}
                <p>부모 컴포넌트에서 전달 받은 데이터 : {props.value}</p>
                {/*버튼 클릭 시 지정한 함수 실행  */}
                <button onClick={sendData} className={'btn btn-outline-secondary'}> 클릭 시 데이터 전달</button>
            </div>
    );
}
export default Child2;