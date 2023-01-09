import React from "react";
import Spaceman from "../img/spaseman.jpg"


const styles = {
    fakeImg: {
        positions: "relative",
        weight: 200,
        height: 200,
        textAlign: "center"
    },
    img: {
        width: 200,
        height: 200,
        objectFit: "cover"
    }

};


function PhotoMe() {
    return (
            <div className={"container p-3 m-4 align-content-center mx-auto"}>
                <h3 className={"fw-semibold p-3"}>About Me</h3>
                <div style={styles.fakeImg}><img src={Spaceman} style={styles.img}/></div>
                <p className={"p-3"}>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
    )
}

export default PhotoMe;