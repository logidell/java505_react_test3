
// 1. 모든 컴포넌트는 React를 import 해서 사용.
// 2. 함수 컴포넌트는 그냥 함수 생성
// 3. 함수 및 클래스 컴포넌트 export default로 설정
// 4. 함수 컴포넌트에는 return에서 jsx 문법을 사용한다.
// 5. state 변경 및 생명 주기에 관련된 함수를 사용하기 때문에  hooks흐하쇼요



import React,{useState} from "react";

function FunctionComponent(props){
    return (
            <div>
                <p>함수 컴포넌트</p>
            </div>
    )
}

export default FunctionComponent;