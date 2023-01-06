import React from "react";
import TitleHead from "./TitleHead";
import PhotoMe from "./PhotoMe";

const styles = {
    content : {
    }
}
function HomeAnother(props) {


    return (
            <div style={styles.content} className="container mt-5" >
                <div className="row">
                    <div className="col-sm-4">

                        <PhotoMe/>

                        <hr className="d-sm-none"/>
                    </div>

                    <div className="col-sm-8">
                        <TitleHead/>
                    </div>
                </div>
            </div>
    )
}

export default HomeAnother;