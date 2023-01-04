import React, {useState} from "react";


function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevConfirmed) => !isConfirmed);
        setTimeout(() => {
            setIsConfirmed(false)
        }, 2000)
    };

    return (
            <div>
                <button type={"button"} className={"btn btn-outline-info"} onClick={handleConfirm} disabled={isConfirmed}>
                    {isConfirmed ? "확인완료 " : "확인하기"}
                </button>
            </div>
    );
}

export default ConfirmButton;