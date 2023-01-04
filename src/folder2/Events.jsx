//events
//리엑트는 html과 같은 이벤트를 가지고 있다.
//카멜 명명법을 사용함. onclick = "sum()"  -> onClick ={sum}으로 변경되어 사용
//매개변수 전달 시 이벤트 부분에 화살표 콜백함수
// =>  onclick={()=>sum()}
// 이벤트 사용 시 이벤트 핸들러도 매개변수로 전달이 가능
// =>  onclick={(event)=>sum(10, event)}

import React from "react";


function Event() {
    const click1=()=>alert("일반 클릭 이벤트 ") // 기본 함수, 클릭 이벤트와 연동
    const click2=(item)=>alert(`매개변수 값 : ${item}, \n 매개 변수가 있는 이벤트`);
    // 매개 변수가 있는 함수를 클릭 연동
    // 매개변수 이벤트를 핸들러로 사용하는 함수를 클릭 이벤트와 연동
    const click3=(item,event)=>{
        let msg = `매개변수, event 객체가 있는 클릭 이벤트 `;
        alert(`매개변수 값 : ${item}, 이벤트 객체 : ${event.type}`);
        console.log(event)

        alert(msg)
    }

    return (
            <div>
                <button type={"button"} className={"btn btn-outline-secondary"} onClick={click1}>일반 클릭 이벤트 </button>
                <button type={"button"} className={"btn btn-outline-success"} onClick = {()=>click2(100)}>매개변수 클릭 이벤트 </button>
                <button type={"button"} className={"btn btn-outline-info"} onClick = {(event)=>click3(300,event)}>event객체 클릭 이벤트 </button>
            </div>
    )
}

export default Event;