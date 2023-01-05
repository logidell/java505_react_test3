import React from "react";
import Child from "./Child";

function Parent(props){
    return(
            <div>
                <h1> - Parent Component Area - </h1>
                <Child value={'부모 데이터'}/>
            </div>
    )

}
export default Parent