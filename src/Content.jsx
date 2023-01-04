import React from "react";

const styles = {
    fakeImg: {
        height: 200,
        backgroundColor: "#aaa"
    }
};

//or import 해서 기존에 있는 css 끌어와도 적용 된다.


function Content() {
    return (
            <div>
                <h2>TITLE HEADING</h2>
                <h5>Title description, Dec 7, 2020</h5>
                <div style={styles.fakeImg}>Fake Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                <h2 className="mt-5">TITLE HEADING</h2>
                <h5>Title description, Sep 2, 2020</h5>
                <div style={styles.fakeImg}>Fake Image</div>
                <p>Some text..</p>
                <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
    );
}

export default Content;