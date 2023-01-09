import React, {useState} from "react";
import {Link} from "react-router-dom";


function BoardPageMove() {

    const [writer, setWriter] =useState("");
    const [title, setTitle] =useState("");
    const [date, setDate] =useState("");


    const handleWriterEvent = (e) => {
        setWriter(e.target.value);
    }
    const handleTitleEvent = (e) => {
        setTitle(e.target.value)
    }
    const handleDateEvent = (e)=>{
        setDate(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(` Writer : ${writer} \n Title : ${title} \n Date : ${date}`);
        e.preventDefault();
    }
    return (
            <div className={"container p-5 m-5 mx-auto"}>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label className={"form-label"}>Writer</label>
                        <input type={"text"} defaultValue={writer}  onChange={handleWriterEvent} className={"form-control"}/>
                    </div>
                    <div>
                        <label className={"form-label"}>Title</label>
                        <input type={"text"} defaultValue={title} onChange={handleTitleEvent} className={"form-control"}/>
                    </div>
                    <div>
                        <label className={"form-label"}>Date</label>
                        <input type={"datetime-local"} defaultValue={date} onChange={handleDateEvent} className={"form-control"}/>
                    </div>

                    <div className={"d-grid gap-2 d-md-flex justify-content-md-end p-3"}>
                        <button className={"btn btn-outline-secondary"} type={"submit"} > Event</button>
                        <Link to={"/Board"}><button className={"btn btn-outline-secondary"}> To Back</button></Link>

                    </div>
                </form>
            </div>
    )
}

export default BoardPageMove