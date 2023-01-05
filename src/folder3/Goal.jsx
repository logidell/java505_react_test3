import React from "react";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";


//조건부 렌더링 : 어떠한 조건에 따라서 화면에 표시할 렌더링이 달라지는 것
//if문 사용시 render() 함수가 동작되는 return 부분에서 조건문을 사용하는 것이 아니라 return 문 밖에서 조건문 사용
//안에서는 삼항연산자를 사용해야 한다.
//자바스크립트의 true / false 부분 (boolean 판단값 )
//true : 논리형 true, 비어있는 객체(비어있는 object 타입), 비어있는 배열, 0이 아닌 숫자,
//      빈 문자열이 아닌 문자열 (글자가 하나라도 있으면 T)
//false : 논리형 false, 숫자 0/0.0, 비어있는 문자열, null, undefined, NaN(Not a Number)



function Goal(props){
    const isGoal = props.isGoal;

    if (isGoal){return<MadeGoal/>}


    return <MissedGoal/>
}
export default Goal;