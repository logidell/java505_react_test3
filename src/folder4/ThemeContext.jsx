import React from "react";


// 컨텍스트 객체 생성, 기본 값으로 'light' 설정. .
const ThemeContext = React.createContext('light');


//기본값은 작성하지 않아도 ok // 컨텍스트 이름 설정
ThemeContext.displayName = 'themeContext'


//컨텍스트 객체를 외부에서 사용할 수 있도록 export 걸어둠.
export default ThemeContext
