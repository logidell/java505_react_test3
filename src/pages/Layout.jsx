//Layout

import React from 'react';
import {Outlet, Link} from "react-router-dom";

function Layout(props){
    return(
            <div>
                <nav>
                    <ul>
                        <li> <Link to={"/"}>Home</Link></li>
                        <li> <Link to={"/blogs"}>Blogs</Link></li>
                        <li> <Link to={"/contact"}>Contact</Link></li>
                        <li> <Link to={"/board1"}>Board</Link></li>
                        <li> <Link to={"/board2"}>Board2</Link></li>
                    </ul>
                </nav>

                <Outlet/>
            </div>
    )

}
export default Layout;