import React from "react";
import axios from "axios";

// async / await : 비동기 처리를 쉽게 하기 위해 개발됨
// 기본적으로 promise 사용

// 사용법 :
//      async function 함수명 (매개변수){
//          const 변수명 = await promise를 사용하는 함수();
//          console.log(변수명);
//      }

function AsyncAwait(props) {
    const fetchItems=()=>{
        return new Promise((resolve, reject)=>{
            const items = [1,2,3];
            resolve(items);
        });
    }

    // 기본 프로미스 사용 시 비동기 처리 방식
    const logItem1=()=>{
        fetchItems()
                .then((item)=>{
                    console.log(item);
                })
                .catch((err)=>{
                    console.log(err);
                })
    }
    //async/await 비동기 처리 방법
    const logItem2=async()=>{
        const resultItem = await fetchItems();

        // resultItem.then((req)=>{
        //
        // }).catch ((err) => {
        //
        // }) 필요 없을 시 안써도 됨.

        console.log(resultItem);
    }
    //-----------사용 방법이 다른 것 외에는 output이 다르진 않다.


    //------------- use axios and promise ----------------

    const getData = async() => {
        const {data} = await axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109');
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
// axios 로 만든 것. 
    }

    return (
            <div className={"p-2"}>
                <button className={"btn btn-secondary m-2 "} onClick={logItem1}> use promise </button>
                <button className={"btn btn-secondary m-2"} onClick = {logItem2}> use async await </button>
                <button className = {"btn btn-outline-success m-2"} onClick = {getData}>use axios and promise </button>
            </div>
    )
}
export default AsyncAwait;