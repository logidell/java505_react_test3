import React from "react";

function ContactSection() {
    return(
            <div className="container" id="contact">
                <div className = "form-label">
                <h1>Contact</h1><br/>
                <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all,
                    both look and taste. Do not hesitate to contact us.</p>
                <p className="fw-bold">Catering Service, 42nd Living St, 43043 New York, NY</p>
                <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
                <form target="_blank">
                    <p><input className="form-control" type="text" placeholder="Name" required name="Name"/></p>
                    <p><input className="form-control" type="number" placeholder="How many people" required name="People"/></p>
                    <p><input className="form-control" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"/></p>
                    <p><input className="form-control" type="text" placeholder="Message \ Special requirements" required name="Message"/></p>
                    <p>
                        <button className="btn btn-outline-success" type="submit">SEND MESSAGE</button>
                    </p>
                </form>
                </div>
            </div>

)

}
export default ContactSection;