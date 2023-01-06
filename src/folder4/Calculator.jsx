import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    //props로 데이터가 넘어왔.
    if (props.celsius >= 100) {
        //100도 기준.
        return (<p>물이 끓습니다.</p>)
    }
    return (<p>물이 끓지 않습니다. </p>)
}

//매개변수로 화씨 온도를 받아서 섭씨 온도로 변환해줌.
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

//매개변수로 섭씨 온도를 받아서 화씨 온도로 변환해줌.
function toFahrenheit(selsius) {
    return (selsius * 9) / 5 + 32;
}

//온도를 받아 convert라는 함수 사용. / 매개변수로 현재 온도(섭씨,화씨)와 (온도 변경을 위한)변환할 함수
function tryConvert(temperature, convert) {

    const input = parseFloat(temperature);
    //실수(소수점)로 변환

    if (Number.isNaN(input)) {
        //들어온 값이 숫자인지/숫자가 아닌지 판단. 숫자가 아닐 시 빈 문자열 반환(f = 숫자 / T = 문자 로 판단.)
        return "";
    }

    //두번째 매개변수로 받은 변환 함수를 사용하여 표시 온도를 변환
    const output = convert(input);

    //잉여소수점은 반올림 시킴. 소수점 이하 부분처리 구문 / 1000이니 소수점 한자리만 두고 처리하겠.
    //.round 뒷 자리 삭제.
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

function Calculator(props) {
    //useState로 설정

    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');
    //기본이 섭씨

    const handleCelsiusChange=(temperature)=>{
        setTemperature(temperature);
        setScale('c');
    };

    const handleFahrenheitChange=(temperature)=>{
        setTemperature(temperature);
        setScale('f');
    };

    //현재 온도 표시 방식에 따라 변환해준다.
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius):temperature;
    // tryConvert(매개변수, 섭씨) // 처음 들어온 값이 섭씨 - > 화씨로  // 섭씨 온도로 들어오면 그대로

    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit):temperature;

    return (
            <div>
                {/*자식 컴포넌트 호출 시 props에 2개의 데이터와 state의 값을 변경할 수 있는 함수를 제공 */}
                <TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
                {/*/                       /                        / 값이 변경될 때 실행*/}
                <TemperatureInput scale={'f'} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>

                {/*온도를 props를 통해 전달. 실수(소수점)  표현하기 위해서 parsFloat 사용*/}
                <BoilingVerdict celsius={parseFloat(celsius)}/>
                {/* 받은 데이터를 소수점으로 변경해줌.   */}

            </div>
    );
}

export default Calculator;