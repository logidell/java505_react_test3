import React, {useState} from "react";


//custom hooks. = hooks 만들어 사용함. 함수에 use만 붙임.  /  함수형태로 사용해 외부에 사용가능하도록 해둠.
//=> 이름에 use를 접두사로 사용함. 매개변수, 반환값을 사용자 마음대로 설정함.
//=> hooks를 내부에서 훅을 사용한 함수, 소스코드 재활용을 위해 사용



//custom hooks 설정
//매개변수 마음대로 설정해둠.
function useCounter(initvalue) {

    //state 사용을 위해 useState 설정을 걸어둠.
    const [count, setCount] = useState(initvalue);

    // 함수 실행 시 setState를 수정하기 위한 setCount를 실행.
    const increaseCount = () => {
        setCount((count) => count + 1)
    //   => setCount((count) => return count + 1)
    }
    const decreaseCount = () => {
        setCount((count) => Math.max(count - 1, 0));
        //Math.max(count - 1, 0) 0 밑으로 내려가지 않게 해줌. /
        //함수 Math 클래스를 사용해 0이하의 값을 사용할 수 없도록 제약을 걸어둠.

        // setCount((count)=>{
        // count--;
        // if (count <0) {count = 0}; })
        //
    }
    return [count, increaseCount, decreaseCount];
}

export default useCounter;