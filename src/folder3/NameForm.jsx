import React, {useState} from "react";


//textbot 이용한 이벤트
function NameForm(props) {
    //변수 value를 state로 설정해줌. 기본 값은 비어있는 문자.
    const [value, setValue] = useState();

    //이벤트 발생 시 동작하는 함수
    //매개변수로 자바스크립트의 event 객체를 가져온다 .
    //이벤트가 발생된 html태그의 정보가 들어있다.
    const handleChange = (event) => {
        //state로 설정된 변수 value의 값을 변경하는 setvalue 함수를 실행
        // event 객체를 통해 이벤트가 발생한 대상에 대한 정보를 가져옴.
        //이벤트 발생 대상이 가지고 있는 value 값을 사용해 state를 변경
        setValue(event.target.value);
        //이벤트 (값을 입력한게 이곳으로 와서 이벤트로 변경
        // -> 현재 값이 아닌 이벤트가 발생했던 값을 들고와 화면에 있는 값을 변경 )
    }
    const handleSubmit = (event) => {
        alert("입력한 이름 : " + value);
        event.preventDefault();
        //이벤트 발생한 이벤트에 대해 값을 변경하고 화면에 출력하라


    }
    return (
            <form onSubmit={handleSubmit} className={"container"}>
                <div className={"my-3"}>
                    <label htmlFor="user-name" className={"form-label"}> 이름: </label>
                    {/*input tag의 value를 state로 설정된 변수를 사용해 화면에 데이터 출력
                    사용자 입력에 의해 값이 변경될 경우 이벤트를 발생시킨다. */}
                    <input type={"text"} className={"form-control"} value={value} onChange={handleChange}/>
                </div>
                <div className={"my-3"}>
                    <button type={"submit"} className={"btn btn-outline-info"}> 제출</button>
                </div>
            </form>
    )
}

export default NameForm;