import React from "react";
import {Link} from "react-router-dom";
import {isValidDateValue} from "@testing-library/user-event/dist/utils";

function BoardPageView() {
    return (
            <div className={"container p-5 m-5 mx-auto"}>
                <div className={"border border-1 border-1 p-5 rounded-3"}>
                    <form>
                        <div>
                            <label className={"form-label"}>Writer</label>
                            <input type={"text"} defaultValue={"o"} className={"form-control"} readOnly={true}/>
                        </div>
                        <div>
                            <label className={"form-label"}>Title</label>
                            <input type={"text"} defaultValue={"o"} className={"form-control"} readOnly={true}/>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default BoardPageView;