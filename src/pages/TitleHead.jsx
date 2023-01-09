import React from "react";
import Cube from "../img/cube.jpg"
import SwingSpageman from "../img/swingspace.jpg"


const styles = {
    fakeImg: {
        positions: "relative",
        weight: 300,
        height: 200,
        textAlign: "center"
    },
    img: {
        positions: "absolute",
        width: 400,
        height: 200,
        objectFit: "cover"
    }
};


function TitleHead(props) {
    return (
            <div className={"container p-5 m-5"}>
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2020</h5>
                <div style={styles.fakeImg}><img src={Cube} style={styles.img}/></div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                <h2 className="mt-5">TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2020</h5>
                <div style={styles.fakeImg}><img src={SwingSpageman} style={styles.img}/></div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
    )

}
export default TitleHead;