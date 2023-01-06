import React, {useState, useCallback} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    //state로 등록
    const [theme, setTheme] =useState('light');

    //useCallback , 콜백 함수 만들어줌.
    // useCallback() : 콜백 함수를 반환하는 React의 hooks, 리엑트에는 메모리제이션 이라는 기능이 있음. 데이터가 지정한
    // 의존성 배열에 등록된 데이터 (deps: [theme])가 변경된 경우에만 동작된다.

    //메모리제이션  : 화면이 재렌더링 한다고 해도 속도가 느려질 수 밖에 없을텐데 기존에 렌더링 할 때 내용이 변경된 것이 없을 때 사용함.
    //변경이 안되었을 시 기존에 있는 것만 사용하고 바꾸는 것은 바꾸는 기능 . 리소스를 덜 사용하고 화면 그리는 속도가 빨라짐.

    const toggleTheme = useCallback(()=>{
        // state로 지정된 값이 변경될 경우에만 동작
        if(theme == "light"){
            setTheme('dark');
        }
        else if(theme == "dark"){
            setTheme('light');
        }
    },[theme]);

    return(
            //컨텍스트의 provider로 해당 컴포넌트 아래의 자손 컴포넌트에서 지정한 데이터를 사용할 수 있도록 한다.
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <MainContent/>
            </ThemeContext.Provider>
    );
}

export default DarkOrLight;