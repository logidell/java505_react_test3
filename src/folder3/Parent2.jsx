import React, {useState} from "react";
import Child2 from "./Child2";


// child2 컴포넌트는 부모 컴포넌트에서 전달받은 2개의 키가 존재한다.
// props에 value, childValue 라는 키를 전달 받았고 해당 키에 1:1로 매칭된 데이터가 존재.
// value :  '부모 데이터','childValue : setState() 함수가 들어있음
function Parent2(props) {
// childData를 state로 설정함.
    const [childData, setChildData] = useState('');

    return (
            <div>
                <h1> Parent2 Component Area </h1>
                {/*자식 컴포넌트 호출 */}
                {/* 자식 컴포넌트 호출 시 value, childValue 라는 키에 데이터를 저장해 전달 */}
                {/* childValue 키에 setState를 전달 */}


                <Child2 value={'부모 데이터'} childValue={setChildData}/>


                {/*현 state 중 childData 변수를 화면에 출력 */}
                <h3>Child2 컴포넌트에서 전달 받은 데이터 : {childData}</h3>

            </div>
    );

}

export default Parent2;