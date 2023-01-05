import React from "react";

function Child(props){

    return(
            <div>
                <h3> 🎈Child Component Area</h3>
                <p>부모 컴포넌트에서 전달 받은 값 : {props.value}</p>
            </div>
    )
}

export default Child;