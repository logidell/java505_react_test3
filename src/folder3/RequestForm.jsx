// RequestForm


import {useState} from "react";

function RequestForm(props) {
    const [value, setValue] = useState('요청 사항을 입력해 주세요')

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        alert("입력한 요청 사항 : " + value);
        event.preventDefault(); //현재 이벤트 동작
    }

    return (
            <form onSubmit={handleSubmit} className={"container"}>
                <div className={"my-3"}>
                    <label htmlFor={"user-contents"} className={"form-label"}>요청사항 : </label>
                    <textarea value={value} className={"form-control"} onChange={handleChange}></textarea>
                {/* value를 설정한 함수로 주면 같이 넘어간다.  */}
                </div>

                <div className={"my-3"}>
                    <button type={"submit"} className={"btn btn-outline-info"}>제출</button>
                </div>
            </form>
    );
}

export default RequestForm;