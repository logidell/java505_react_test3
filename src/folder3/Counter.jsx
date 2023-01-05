import React from "react";

function Counter(props){
    const count=0;


    return(
            <div>
                {count && <h1> 현재 카운트 : {count}</h1>}
                {/* f / t =  값이 0이기 때문에 0이 화면에 출력됨.
                count 자체가 0이라서 화면에 찍힘. 값을 나오게 하지 않으려면 삼항연산자를 사용하거나
                값을 다르게 줘야 한다. */}
            </div>
    )
}
export default Counter;