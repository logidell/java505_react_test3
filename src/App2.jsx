import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import {Nav} from "react-bootstrap";
import Navigate from "./Navigate";
import LinkList from "./LinkList";
import PhotoMe from "./PhotoMe";

const styles = {
    fakeImg: {
        height: 200,
        backgroundColor: "#aaa"
    }
};

// (px이 안먹힘)


function App2() {
    return (
            <div>
                <Header/>

                <Navigate/>

                <div className="container mt-5 text-black">
                    <div className="row">
                        <div className="col-sm-4">

                            <PhotoMe/>

                            <h3 className="mt-4"></h3>
                            <LinkList/>
                            <hr className="d-sm-none"/>
                        </div>
                        {/*content*/}
                        <div className="col-sm-8">
                            <Content/>
                        </div>
                    </div>
                </div>

                {/*footer*/}
                <Footer/>

            </div>
    );

}

export default App2;