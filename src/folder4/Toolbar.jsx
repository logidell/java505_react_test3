import React from "react";
import ThemedButton from "./ThemedButton";

function Toolbar(props){
    return(
            <div>
                {/*자식 컴포넌트로 theme 라는 이름의 데이터 전달 */}
                <ThemedButton theme={props.theme} />
            </div>
    )
}
export default Toolbar;