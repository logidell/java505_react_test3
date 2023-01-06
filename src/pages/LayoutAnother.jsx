import React from 'react';
import {Outlet, Link} from "react-router-dom";

const styles={
    navBG:{
        backgroundColor:"rgba(187,165,151,0.6)",
        color : "rgb(0,0,0)"
    }
}

function LayoutAnother(props) {
    return (
            <div>
                <nav style={styles.navBG} className="navbar navbar-expand-sm opacity-75 fw-semibold">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link active" to={"/"}>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={"/about"}>About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={"/board"}>Board</Link></li>
                        </ul>
                    </div>
                </nav>

                <Outlet/>
            </div>
    )

}

export default LayoutAnother;