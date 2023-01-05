//MainPage
import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage(props) {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(!showWarning);
    }
    return (
            <div>
                <WarningBanner warning={showWarning}/>
                <button className={"btn btn-outline-danger"} onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
            </div>
    )
}

export default MainPage;