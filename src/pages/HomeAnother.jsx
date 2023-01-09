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
                        <div className={"container"}>
                            <PhotoMe/>
                        </div>
                        <hr className="d-sm-none"/>

                        <div className={"p-5"}>
                            <nav className="nav flex-column">
                                <a className="nav-link active" aria-current="page" href="!#">Active</a>
                                <a className="nav-link" href="!#">Link</a>
                                <a className="nav-link" href="!#">Link</a>
                            </nav>
                        </div>

                    </div>

                    <div className="col-sm-8">
                        <TitleHead/>
                    </div>
                </div>
            </div>
    )
}

export default HomeAnother;