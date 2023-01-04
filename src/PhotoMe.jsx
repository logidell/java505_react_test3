import React from "react";


const styles = {
    fakeImg: {
        height: 200,
        backgroundColor: "#aaa"
    }
};
function PhotoMe() {
    return (
            <div>
                <h2>About Me</h2>
                <h5>Photo of me:</h5>
                <div style={styles.fakeImg}>Fake Image</div>
                <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            </div>
    )
}
export default PhotoMe;