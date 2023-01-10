import React, {useEffect} from "react";
import axios from 'axios';

//axios : node.js 비동기 통신 위한 라이브러리(js의 ajax) - promise를 사용한다.
// - promise를 사용하기 때문에 than, catch 가 존재

// axios 는 rest 방식을 지원.
//  get(요청주소) : get 방식으로 서버에 데이터 요청
//  post(요청주소) : post 방식으로 서버에 데이터 요청
//  get(url, data[, config]) : get 방식으로 서버에 데이터 전달
//  post(url,data[, config]) : post 방식으로 서버에 데이터 전달
//  put(url,data[, config]) : put 방식으로 서버에 데이터 전달
//  delete(url,data[, config]) : delete 방식으로 서버에 데이터 전달
//  options(url,data) : axios 객체 생성 시 설정 정보를 변경할 수 있음.

//  than() : 정상적으로 통신이 성공했을 경우
//  catch() : 통신이 실패했을 경우 실행

//async / await와 함께 사용 시 then을 필요할 경우 나중에 호출할 수 있음
//async / await와 함께 사용 시 예외처리를 try/catch로 처리할 수 있음.


// 응답 객체 :  요청에 대한 응답 객체가 json 방식으로 전달됨
// data{} :  서버에서 제공한 데이터 json 타입
// status : 서버와의 통신 응답 신호,
//          200: ok
//          300: redirect
//          400: 리소스 없음
//          500: 내부 서버 오류
// statusText : 서버와의 응답 메세지
// headers{} : 서버에 응답한 헤더 정보
// config{} : 서버에 요청 시 axios 설정 정보
// request{} : 응답을 생성한 요청

//      사용법 :
//      axios.get(url).then(function(req){
//      성공 시 실행할 소스 ;
//      })
//      .catch(function(err){
//      실패 시 실행할 소스;
//      })


// 원래의 axios 기본 사용법 :
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });

//보통은 요청 메소드 명령어를 사용한다고 함.
// axios(
//      method : 'get|post|put|delete',
//      url : 'url',
//      data : {
//          param1:'data',
//          param1:'data',
//      },
// });

// axios.post(url, {
//      param1 : 'data1',
//      param2 : 'data2',
// }).then(function(req){
//      성공 시 실행할 소스;
// }).catch(function(err){
//      실패 시 실행할 소스;
// })
//




//사용법 : 터미널에서 npm install axios 입력
//import axios from 'axios'; //사용할 컴포넌트에서 axios import
function AxiosText(props) {
    useEffect(() => {
        axios.get('https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109')
                .then((req) => {
                    console.log("통신 성공")
                    // console.log(req); //javascript object type으로 넘어옴.
                    // console.log(req.data) //javascript object type의 data만 넘어 옴.
                    // console.log(req.data.boxOfficeResult.dailyBoxOfficeList);
                    const boxOffList=req.data.boxOfficeResult.dailyBoxOfficeList;
                    console.log(boxOffList);
                    for (let i= 0; i<boxOffList.length ; i++){
                        let str=`
                        순번 : ${boxOffList[i].rnum}
                        순위 : ${boxOffList[i].rank}
                        제목: ${boxOffList[i].movieNm}
                        개봉일: ${boxOffList[i].openDt}
                        관람객: ${boxOffList[i].audiCnt}`
                        console.log(str+'\n')
                    }

                }).catch((err) => {
            alert("통신 실패")
        });
    },[]);
    return (
            <div>
            </div>
    )
}

export default AxiosText;