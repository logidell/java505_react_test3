import React from 'react';
import {useLocation, useNavigate, useNavigation, useSearchParams} from "react-router-dom";

function Board2(props) {
    const param1 = useLocation();
    const [param2, setParam2] = useSearchParams();

//---------------------------------------------------------------

    const navi = useNavigate();
    const goBack = () => {
        navi(-1);
    }
    const goBoard = () => {
        navi('/board1/100');
    }

    return (
            <div>
                <p>{param1.search}</p>
                <p>{param2.get("val1")}</p>
                <p>{param2.get("val2")}</p>
                {/*    ------------------------------------  */}
                <div className={"p-2"}>
                <button className={'btn btn-outline-secondary m-2'} onClick={goBack}> Go Back </button>
                <button className={'btn btn-secondary'} onClick={goBoard}> Go Board1 </button>
                </div>
            </div>
    )
}

export default Board2;