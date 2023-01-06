import React from "react";

function TemperatureInput(props){

    const scaleName ={
        c:"섭씨",
        f:"화씨"
    }

    //input 태그 값 변경 이벤트 발생 시 동작할 함수, event 객체를 매개변수로 가져옴.
    const handleChange =(e)=>{
        //부보 컴포넌트에서 전달 받은 props 중 이름이 onTemperatureChange 인 함수를 실행. -> 부모 컴포넌트 (Calculator의 handle)
        //onTemperatureChange 함수는 부모 컴포넌트의 state 값을

        props.onTemperatureChange(e.target.value);
        //    이벤트 발생한 곳의 value 값.
    };

    return(
            <fieldset>
                <legend>
                    온도를 입력해 주세요 ( 단위 : {scaleName[props.scale]})
                </legend>


                <input value={props.temperature} onChange={handleChange} />
                {/*  onChange =  실 input 태그의 이벤트 / 값 변경시 발생하는 이벤트. 해당 이벤트에 handleChange 함수를 연동 */}
            </fieldset>
    )
}

export default TemperatureInput;