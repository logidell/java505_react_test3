import React, {useState} from "react";


function About(props) {

    const [eventAlert, setEventAlert] = useState();

    const handleEvent = (e) => {
        setEventAlert(e.target.value)
    }

    const handleSubmit = (e) => {
        alert("hh " + eventAlert);
        e.preventDefault();
    }


    return (
            <div className="container mt-5 text-black text-center">
                <div>
                    <h3> Input Information</h3>
                    <form className={"mb-3 p-3"}>
                        <div>
                            <label htmlFor={"Id"} className={"form-label"}> ID </label>
                            <input type={"text"} className={"form-control"} value={eventAlert} onChange={handleEvent}/>
                        </div>


                        <div className={"mt-5"}>
                            <button type={"submit"}>연습중</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default About