import React, {useState, useEffect} from "react";

let calResult = 0;

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const sum = () => {
        const number1 = parseInt(num1)
        const number2 = parseInt(num2)
        calResult = number1 + number2;
    }
    const sub = () => {
        const number1 = parseInt(num1)
        const number2 = parseInt(num2)
        calResult = number1 - number2;
    }
    const multi = () => {
        const number1 = parseInt(num1)
        const number2 = parseInt(num2)
        calResult = number1 * number2;
    }
    const divide = () => {
        const number1 = parseInt(num1)
        const number2 = parseInt(num2)
        calResult = number1 / number2;
    }
    const resultCal = () => setResult(calResult);

    return (
            <div className={"row"}>
                <div className={"col-sm-4 mx-auto border rounded-3"}>
                    <div className={"my-3"}>
                        <label htmlFor={"num1"}>첫번째 숫자 : </label>
                        <input type={"text"} id={"num1"} name={"num1"} className={"form-control"} placeholder={"첫번째 숫자를 입력하세요"} value={num1} onChange={(e) => setNum1(e.target.value)}/>
                    </div>
                    <div className={"my-3"}>
                        <label htmlFor={"num2"}>두번째 숫자 : </label>
                        <input type={"text"} id={"num2"} name={"num2"} className={"form-control"} placeholder={"두번째 숫자를 입력하세요"} value={num2} onChange={(e) => setNum2(e.target.value)}/>
                    </div>
                    <hr/>
                    <div className={"my-3 d-flex justify-content-between"}>
                        <button type={"button"} className={"btn btn-primary"} onClick={sum}> +</button>
                        <button type={"button"} className={"btn btn-primary"} onClick={sub}> -</button>
                        <button type={"button"} className={"btn btn-primary"} onClick={multi}> *</button>
                        <button type={"button"} className={"btn btn-primary"} onClick={divide}> /</button>
                        <button type={"button"} className={"btn btn-info"} onClick={resultCal}> =</button>
                    </div>
                    <hr/>
                    <div className={"my-3"}>
                        <label htmlFor={"result"}>계산 결과 : </label>
                        <input type={"text"} id={"result"} name={"result"} className={"form-control"} value={result}/>
                    </div>
                </div>
            </div>

    )
}

export default Calculator;