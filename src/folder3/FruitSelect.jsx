import React, {useState} from "react";

function FruitSelect(props) {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState(['']);


    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleChange2 = (e) => {

        //select box 자식 태그인 option태그를 모두 가져옴
        const options = e.target.options;

        //선택된 데이터를 저장하기 위한 배열
        let items = [];

        //option의 크기만큼 반복
        for (let i = 0; i < options.length; i++) {
            //option 태그 중 선택된 태그인지 아닌지 확인
            if (options[i].selected) {
                //선택된 태그의 내용만 배열에 저장
                items.push(options[i].value);
            }
        }
        //setState() 함수를 통해서 state를 업데이트
        setValue2(items)
    }
    const handleSubmit = (e) => {
        alert(`선택한 과일 : ${value}`);
        e.preventDefault();
    }
    return (
            <form onSubmit={handleSubmit}>
                <div className={"my-3"}>
                    <label htmlFor={'sel1'} className={'form-label'}> 과일을 선택하세요 : </label>
                    {/*select 사용 시 기본 값 설정  value 속성으로 진행한다. html은 기본 설정이 안되어있. */}
                    {/* react 에서는 on/off 때문에 multiple 속성 사용 시 true/false 사용 / disabled도 마찬가지 이런 비슷한 류의 속성들은
                    T/F 값이 있으니 확인 할 것.
                    => React 에서 기본 html 속성 중 속성 명으로만 효과가 발생하는 속성에 대해서도 값을 제어하기 위해 속성명 ={T/F} 형식으로 사용한다./*/}
                    <select id={'sel1'} className={'form-select'} value={value} onChange={handleChange} multiple={false} disabled={false}>
                        <option value={'apple'}>사과</option>
                        <option value={'banana'}>바나나</option>
                        <option value={'grape'}>포도</option>
                        <option value={'melon'}>멜론</option>
                    </select>
                    <br/>
                    {/*multiple 사용하려면 값에 배열을 줘야한다. */}
                    <div className={"my-3"}>
                        <label htmlFor={'sel2'} className={'form-label'}> 과일을 선택하세요 : </label>
                        <select id={'sel2'} className={'form-select'} value={value2} onChange={handleChange2} multiple={true}>
                            <option value={'apple'}>사과</option>
                            <option value={'banana'}>바나나</option>
                            <option value={'grape'}>포도</option>
                            <option value={'melon'}>멜론</option>
                        </select>
                    </div>
                </div>

                <div className={'my-3'}>
                    <button type={'submit'} className={'btn btn-outline-info'}>🎈🎈</button>
                </div>
            </form>
    )
}

export default FruitSelect;