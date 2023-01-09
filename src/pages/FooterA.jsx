import React from "react";

const styles={
    bg:{
        backgroundColor:"rgb(175,158,143)",
        padding: 150
    }
}


function FooterA(props) {
    return(
            <div style={styles.bg} className="mt-5 p-4 text-white text-center">
                <p>Footer</p>
            </div>
    )

}
export default FooterA;