import React, {useState, useEffect} from 'react';
import useCounter from "./useCounter";


const Max_CAPACITY = 10; //최대 값 상수 지정


function Accommodate(props) {
    //state를 사용하기 위해 useState 설정
    const [isFull, setIsFull] = useState(false);
    //isFull로 설정, 수정 위해선 setIsFull 이름을 이용해 수정 필요

    const [count, increaseCount, decreaseCount] = useCounter(0);
    // const [count, setCount] = useState(0);
    //이후
    //const [~] 이런 식으로 만들어 사용해야 했으나 custom hooks를 이용해 위의 식으로 사용
    // 해당 컴포넌트 내부에서 생성해야 할 객체 및 setState를 커스텀 훅을 통해 생성한다.
    // custom hooks를 사용했기에 재활용이 가능함.


    // react 생명주기 함수를 사용하기 위해서 useEffect 설정
    //의존성 배열이 없을 경우 componentDidMount, componentWillMount 를 실행하는 것과 같은 효과
    useEffect(() => {
        console.log("==================================================")
        console.log(" useEffect() is called")
        console.log(`is Full : ${isFull} `)
    },[]);

    //의존성 배열에 count설정하여(const [count, increaseCount, decreaseCount] = useCounter(0);에 들어가는 count)
    //count 값이 수정되면 componentDidUpdate를 실행하는 것과 같은 효과
        useEffect(() => {
        setIsFull(count >= Max_CAPACITY);
        console.log(" 현재 count 값 :" + count);
    }, [count]);

    return (
            <div>
                {/*현재 state로 설정된 count 값을 출력*/}
                <p>{`총 ${count}명 수용 하였습니다. `}</p>
                {/*custom hook 통해 만들어진 사용자 입장/퇴장 함수를 버튼에 등록 */}
                <button className={"btn btn-outline-info"} onClick={increaseCount} disabled={isFull}> 입장</button>
                {/*disabled={isFull}로 가득차면 입장불가로 뜨게 /  */}
                <button className={"btn btn-outline-success"} onClick={decreaseCount}>퇴장</button>

                {/*if 문을 직접 사용할 수 없으니 &&( 논리AND) 전체가 true 가 되어 출력됨. */}
                {/*is Full = false로 줬음. => true가 되었으니 뒷 구문을 실행하며 화면에 뿌려줌. */}
                {isFull && <p style={{color: "red"}}>정원이 가득 찼습니다. </p>}
            </div>
    )
}

export default Accommodate;