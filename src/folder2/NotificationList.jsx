//NotificationsList.jsx
import React from "react";
import Notification from "./Notification";

// 서버에서 전송되어야 할 데이터, 통신 모듈이 없기 때문에 임의로 만들어 준 데이터
const msgData = [
    {id: 1, Message: "안녕하세요, 오늘 일정입니다. "},
    {id: 2, Message: "점심 식사 시간입니다"},
    {id: 3, Message: "이제 미팅 시작입니다."}
];

//자바스크립트 타이머 객체 정보를 저장할 변수
let timer;


//클래스 컴포넌트를 사용
class NotificationList extends React.Component {
    //클래스 컴포넌트의 생성자

    constructor(props) {
        super(props);

        //state 객체 선언 , 클래스(객체)의 멤버 변수로 선언
        this.state = {
            // Message를  저장할 배열
            notification: [],
        }
    }

    //화면을 생성(렌더링)하는 함수
    render() {
        return (
                <div>
                    {/*map : es6 버전에서 추가된 배열 관련 함수, 지정한 배열(notification: [])의 크기만큼 반복하고
                    결과를 배열로 반환하는 함수*/}
                    {this.state.notification.map((item)=>{
                    return <Notification key={item.id} message={item.message}/>
                })}
                </div>
        );
    }

    // 컴포넌트가 마운트 된 후 실행되는 생명주기 함수 / = 화면이 렌더링 된 후 동작
    componentDidMount() {
        //object 타입을 사용한 확장 표현식
        const {notification} = this.state;
        //현재는 비어있는 상태.

        //타이머를 사용해 지정한 시간에 한번씩 반복함
        timer = setInterval(() => {
            // 지역 변수 notification 크기가 전역변수 배열 msgData 보다 작을 경우
            //timer가 돔  -> setInterval 반복실행함.
            if (notification.length < msgData.length) {
                // 비어있는 notification 배열의 길이 가 작음  / true (msgData.length = 3)
                const index = notification.length;
                notification.push(msgData[index]);
                // msgData[index](서버에서 받은 데이터) / .push 데이터 밀어주기.

                this.setState({
                    notification : notification,
                });
                //전역변수 notification 을 수정 / 지역변수 notifiaction 컴포넌트 마운트에 선언된 변수의 notiaction 데이터
            }
            else {
                clearInterval(timer);
                // 타이머 삭제
            }
        }, 1000) //1초 후 실행
    }
}
// 자바 스크립트 1thread
//동시에 뜨는 이유 = > index.js로

export default NotificationList;