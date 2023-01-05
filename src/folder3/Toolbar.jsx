import React from "react";


const styles = {
    wrapper: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        borderBottom: '1px solid gray'
    },
    greeting: {
        marginRight: 8,
    }
}

function Toolbar(props) {
    //object의 확장표현식 사용해 props의 객체에 있는 데이터 모두 받음.
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    //일반 로그인/ 함수/ 함수
    return (
            <div style={styles.wrapper}>
                {/* && 연산자로 isLoggedIn 값 따라 화면 렌더링 여부 결정  */}
                {isLoggedIn && <span style={styles.greeting}>Greetings!</span>}

                {/*삼항연산자로 로그인 /로그아웃 버튼 출력 */}
                {isLoggedIn
                        ? (<button onClick={onClickLogout}>Logout</button>)
                        : (<button onClick={onClickLogin}>Login</button>)}
            </div>
    );
}

export default Toolbar;