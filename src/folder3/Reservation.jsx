import React, {useState} from "react";

function Reservation(props) {
    const [haveBreackfast, setHaveBreackfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2)

    const handleSubmit = (e) => {
        alert(`아침식사 여부 : ${haveBreackfast}, 방문객 수 : ${numberOfGuest}`);
        e.preventDefault();
    }
    //묶어놓음.

    return (
            <form onSubmit={handleSubmit}>
                <div className={'my-3'}>
                    <label htmlFor={''} className={'form-label'}> 아침 식사 여부 : </label>
                    <input type={'checkbox'} checked={haveBreackfast} onChange={(e) => {
                        setHaveBreackfast(e.target.checked);
                        //    바로 실행하는 형태
                    }}/>
                </div>
                <div className={'my-3'}>
                    <label className={'form-label'}>방문객 수 : </label>
                    <input type={'number'} value={numberOfGuest} onChange={(e) => {
                        setNumberOfGuest(e.target.value);
                    }}/>
                </div>
                <div className={'my-3'}>
                    <button type={'submit'} className={'btn btn-outline-secondary'}>🎲</button>
                </div>
            </form>
    )

}

export default Reservation;