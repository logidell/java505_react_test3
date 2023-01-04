import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App4 from './App4';
import reportWebVitals from './reportWebVitals';
import App2 from "./App2";
import App3 from "./App3";
import App5 from "./App5";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        //StrictMode : 자바스크립트의 문법을 엄격하게 확인하는 의미
        //react - StrictMode : 배포 버전에 제외되며 개발 버전에서만 동작하는 엄격모드
        // 몇가지 함수를 중복실행하여 잘못된 것이 없는지 개발자에게 확인하도록 한다.
        // render 부분이 두번 실행되기 때문에 componentsDidMount가 두번 실행되게 된다.
        <React.StrictMode>
            {/*<App />*/}
            {/*<App2/>*/}
            {/*<App3/>*/}
            {/*<App4/>*/}
            <App5/>
        </React.StrictMode>

        // <App5/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//없어도 상관없는 부분.
