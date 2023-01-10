import React, {useState} from "react";
import axios from "axios";


function DailyBoxOffice(props) {

    const [boxOfficeState, setBoxOffice] = useState([]);
    //boxOffice를 state로 설정, 초기 값은 빈 배열 설정


//Quest 1. 버튼 클릭 시 axios 통신을 통해 데이터를 가져와 화면의 table에 출력하는 컴포넌트 작성하기
    // state (화면이 업뎃 되기 때문), map(배열로 가져오기 때문)
    const loadBoxOffice = () =>{
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109')
                .then((req) =>{
                    const boxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;
                    setBoxOffice(boxOffice);
                }).catch ((err)=>{
                    console.log('통신 중 오류가 발생하였습니다. ')
        })

    }


    return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-sm-8 mx-auto"}>
                        <table className={"table table-hover table-striped"}>
                            <thead>
                            <tr>
                                <th>순위</th>
                                <th>제목</th>
                                <th>개봉일</th>
                                <th>당일 관람객</th>
                                <th>누적 관람객</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                boxOfficeState.map((item)=>{
                                    return(
                                            <tr key={item.rnum}>
                                                <td>{item.rank}</td>
                                                <td>{item.movieNm}</td>
                                                <td>{item.openDt}</td>
                                                <td>{item.audiCnt}</td>
                                                <td>{item.movieCd}</td>
                                            </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        <hr/>
                        <div className={"my-3 d-flex justify-content-end"}>
                            <button className={"btn btn-outline-secondary btn-sm"} onClick = {loadBoxOffice}>Rank List</button>
                        </div>
                    </div>
                </div>
            </div>)
}

export default DailyBoxOffice;