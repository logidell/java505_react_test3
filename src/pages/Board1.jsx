import React from "react";
import {useParams} from "react-router-dom";

function Board1(props){
    const boardSelect=useParams();

    return(
            <div>
                <h2>글 번호 : {boardSelect.boardIdx}</h2>
            </div>
    )
}
export default Board1;