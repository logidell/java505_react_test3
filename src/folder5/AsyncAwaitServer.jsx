import React from "react";
import axios from "axios";

function AxiosRestServer(props) {

    const sendDataGet = () => {
        axios.get("http://localhost:8080/async/sendDataGet")
                .then((req) => {
                    console.log("sendDateGet 통신 성공")
                    console.log(req)
                }).catch((err) => {
            console.log("sendDateGet 통신 에러");
        });

        //get도 지정한 것들만 지울 때는 params를 준다
    }
    const sendDataPost = () => {
        axios.post("http://localhost:8080/async/sendDataPost",null,{params:{id : "id", pw:"pw"}})
                .then((req) => {
                    console.log("sendDataPost 통신 성공")
                    console.log(req)
                }).catch((err) => {
        console.log("sendDataPost 통신 에러");
        });
    }
    const sendDataPut = () => {
        axios.put("http://localhost:8080/async/sendDataPut",null, {params:{idx:100}})
                .then((req) => {
                    console.log("sendDataPut 통신 성공")
                    console.log(req)
                }).catch((err) => {
            console.log("sendDataPut 통신 에러");
        });
    }
    const sendDataDelete = () => {
        axios.delete("http://localhost:8080/async/sendDataDelete", {params:{idx:200}})
                .then((req) => {
                    console.log("sendDataDelete 통신 성공")
                    console.log(req)
                }).catch((err) => {
            console.log("sendDataDelete 통신 에러");
        });
    }
    // delete 의 경우는 null이 없다.

    return (
            <div className={"container my-5 p-5"}>
                <h1 className={"text-center"}> Axios 사용한 비동기 통신 </h1>
                <div className={"row"}>
                    <div className={"col-sm-8 mx-auto"}>
                        <div>

                        </div>
                        <div className={"my-3 d-flex justify-content-sm-center"}>
                            <button className={"btn btn-outline-primary me-3"} onClick={sendDataGet}>get 방식</button>
                            <button className={"btn btn-outline-success me-3"} onClick={sendDataPost}>post 방식</button>
                            <button className={"btn btn-outline-info me-3"} onClick={sendDataPut}>put 방식</button>
                            <button className={"btn btn-outline-warning me-3"} onClick={sendDataDelete}>delete 방식</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AxiosRestServer;