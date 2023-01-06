import React from "react";
// import {Button} from "react-bootstrap";
const styles={
    bg:{
        background : "white"
    }}

function Button(props){
    //부모에게서 전달받은 theme를 사용하고 있음.

    if (props.theme === "dark"){
        styles.bg.backgroundColor ='white'
    } else {
        styles.bg.backgroundColor = ' dark'
    }

    return <button style={styles.bg}> 테마 적용 버튼 </button>
}

function ThemedButton(props) {
    return <Button theme={props.theme}></Button>
}

export default ThemedButton;


// 데이터 끌어올리기는 너무 많이 거쳐 감;; 그래서 사용 -> context