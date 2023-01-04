import React, {useState, useEffect} from "react";

//useState =>  hooks를 사용하기 위해 import함.


//hooks :  기존의 존재하는 기능을 추가로 함께 사용하도록 하는 것
// (state, react 생명주기 기능을 원하는 시점에 실행할 수 있도록 하는 기능)
//      useState : state 객체를 함수 컴포넌트에서 사용할 수 있도록 하는 기능
//      useEffect : useState()와 함께 가장 많이 사용되는 훅, 리액트 생명주기 함수인 componentsDidMount,
//                  ComponentDidUpdate, ComponentWillUnmount의 기능을 하나로 합한 기능
//      useMemo : 재렌더링 시 연산량이 높은 작업을 반복하는 것을 피할 수 있도록 하는 기능
//      useCallback : useMemo와 비슷한 기능, 값이 아닌 함수를 반환.
//      useRef : 지정한 컴포넌트에 접근할 수 있는 객체

//----------------------------------------

//useState 사용 법
// 클래스 컴포넌트에 존재하는 state 객체를 함수 컴포넌트에서 사용할 수 있도록 함.
// const[변수명, set함수명]=useState(초기값);
//=> 변수명:state로 지정할 지역 변수 명
//=> set함수명 : state로 지정 된 변수명에 접두사 set을 붙여서 사용, 카멜 명명법 사용
// useState(초기값) : 확장표현식을 통해 지정한 변수를 state 객체로 설정
//                      -> 초기값 state로 설정된 변수의 초기값을 말함
//                   state로 지정할 변수가 여러 개 일 경우 useState를 변수 수 만큼 실행해야 한다.



//useEffect 사용법
//클래스 컴포넌트에 존재하는 생명주기 함수를 사용할 수 있도록 한다.
//useEffect(이펙트 함수 , 의존성 배열)
//=> 이펙트 함수 : callback 함수
//=> 의존성 배열 : 이펙트 함수가 의존하고 있는 배열, 해당 의존성 배열안에 있는 변수 중 하나라도 값이 변경되면 실행
// 이펙트 함수는 기본적으로 컴포넌트가 처음 렌더링 된 후 데이터 업데이트에 의한 재렌더링시 실행된다.
// 이펙트 함수를 마운트, 언마운트 시 각각 1번씩만 실행하고자 할 경우 의존성 배열에 빈 배열을 사용한다.
//(=> componentsDidMount, ComponentsWillUnmount 기능을 수행한다. )
// 의존성 배열이 없는 경우 화면이 재렌더링된 이후 실행한다. (ComponentsDidUpdate 기능 수행)


//hooks 의 규칙
//1. hooks는 무조건 최상의 레벨에서만 호출이 가능하다.
//      if, for문의 내부에서 hooks 호출 불가능
//2. hooks는 컴포넌트가 렌더링 될 때마다 매번 같은 순서로 호출되어야 한다.
//3. 함수 컴포넌트에서만 hooks를 사용할 수 있다.
//      일반적 javascript 함수에서 hooks 호출 불가능
//


//customHooks
//사용자가 직접 만드는 hooks, 리액트에서 제공하는 hooks가 아님.
// 이름에 접두사로 use를 사용하고 함수 내부에서 다른 hooks를 호출하는 단순 javascript 함수
// 파라미터 및 반환값을 사용자가 직접 지정할 수 있다. 중복되는 로직을 커스텀 훅으로 설정해 재사용하기 위함.
//이름에 접두사로 use를 사용하지 않을 경우 함수 내부에서 훅을 사용하는지 판단할 수 없음.


//hooks를 사용하기 전 미리 import 해서 사용해야 한다.
//함수 컴포넌트 사용
function CountButton2(props) {
    //일반 변수 설정
    // let count = 0;

    //useState를 통해 객체에 추가하기
    const [count, setCount] = useState(0);
    //화면 렌더링이 필요할 때  / 초기값 필요할 때는 기본값을 주기 / 필요 없을 때는 비워두기

    // useEffect(()=>{
    //     document.title = `총${count}회 클릭하였습니다. `});
    // //화면이 reloading 될 때마다 갱신됨. useEffect 사용해 componentsDidMount, ComponentsDidUpdate를 구현
    // 화면이 재렌더링 후 실행됨.

    useEffect(()=>{
        document.title = `총${count}회 클릭하였습니다. `},[count]);
    //화면이 reloading 될 때마다 갱신됨.


    //함수 컴포넌트 안에서 다시 함수 선언
    const countUp = () => {
        // count++;
        setCount(count + 1);

        console.log(`count: ${count}`);
    }
    const countDown = () => {
        // count--;
        // setCount(count-1);
        setCount((count) =>{return count -1}) //callback 함수 방식
        console.log(`count: ${count}`);
    }

    return (
            <div>
                <label className={"form-label"}>count : {count}</label><br/>
                <button className={"btn btn-outline-success"} onClick={countUp}>+</button>
                <button className={"btn btn-outline-info"} onClick={countDown}>-</button>
            </div>
    )
}


export default CountButton2;