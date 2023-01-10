import React from "react";
import Calculator from "./folder4/Calculator";
import App from "./folder4/App";
import App2 from "./folder4/App2";
import App4 from "./folder4/App4";
import DarkOrLight from "./folder4/DarkOrLight";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import NoPage from "./pages/NoPage";
import HomeAnother from "./pages/HomeAnother";
import Board from "./pages/Board";
import About from "./pages/About";
import LayoutAnother from "./pages/LayoutAnother";
import Header from "./pages/Header";
import FooterA from "./pages/FooterA";
import BoardPageMove from "./pages/BoardPageMove";
import BoardPageView from "./pages/BoardPageView";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Board1 from "./pages/Board1";
import Board2 from "./pages/Board2";


const styles = {
    wrapper: {
        height:"auto",
        minHeight:"100%",
        paddingBottom:"50px",

    },
    footer : {
        height:"50px",
        position:"relative",
        transform:"translateY(-100%)"
    }
}


function Home() {
    return null;
}

function App7(props) {
    return (
            // <div className={"container mt-5"}>
            //     <Calculator/>
            //     <hr/>
            //     <App/>
            //     <hr/>
            //     <App2/>
            //     <hr/>
            //     <DarkOrLight/>
            //     <hr/>
            //     <App4/>
            // </div>

            //ReactRouter : SPA 방식의 리엑트 앱을 MPA 방식으로 사용할 수 있도록 해주는 라이브러리
            //Routes : 페이지 객체를 여러개 가질 수 있는 객체
            //Route : 화면에 그려지는 페이지 객체

            //path : 맵 브라우저에 표시되는 url 주소 설정하는 곳 , 절대/상대 경로 다 사용 가능
            //      * 애스터리스크 사용 시 모든 페이지를 뜻함. path url을 정확하게 입력해야 접속이 가능하다.
            //      **(예전에는 주소 정확하게 입력하지 않아도 됬고 당시 상대경로가 적용이 안되었음. + 사용 시에는
            //          추가로 넣었으나 업데이트 이후에는 그러지 않아도 됨. ) **

            //element : path로 지정된 url 주소와 매칭되는 컴포넌트

            //<Link> : 리엑트 라우터에서 사용되는 링크전용 컴포넌트, html의 a태그 역할
            //         ->  to : url 주소 입력 부분, Route 컴포넌트에 설정된 주소
            //<Outlet> : 현재 선택된 경로의 컴포넌트를 화면에 표시
            //

            //url 파라미터 : restful 방식의 주소 형태로 구성되는 파라미터. 기존 url뒤에 /와 :파라미터명 을 사용해
            // 데이터 전달하는 방식. rest 방식에서 많이 사용한다.
            // 연결된 컴포넌트에서 useparam hooks를 사용해야 한다.
            // 사용법: 기존 url/: 파라미터1/:파라미터2
            //  ** <Route path=url/:test1/:test2 element={<Url/>}

            //쿼리스트링 : 기존의 get 방식으로 웹 브라우저의 주소에 파라미터를 함께 전달하는 방식
            //<Route> 컴포넌트의 path 에 변경이 없는 대신 지정된 컴포넌트에서 몇가지 옵션 사항을 사용할 수 있다.
            //      - 옵션 -
            //          pathname : 쿼리스트링을 제외한 현재 주소의 경로
            //          search : 맨 앞의  ? 문자를 포함한 쿼리 스트링 값 전체
            //          hash : 주소의 # 문자열 뒤의 값 ( 구형 브라우저(internet explorer)에서만 사용한다. 잘 사용 안한다 함. )
            //          state : 페이지 이동 시 임의로 추가할 상태 값
            //          key : location 객체의 고유 값
            // useLocation(), useSearchParams() hooks 사용해 데이터 가져올 수 있다.
            // useLocation() : 이용해 데이터를 가져올 시 원하는 파라미터 값을 가져오기 위해 직접 파싱을 진행해야 한다.
            // useSearchParams() : 이용해 데이터 가져올 시 파라미터 데이터만 따로 가져올 수 있다.

            // 사용법 : 기존 url?파라미터1=값&파라미터2=값2

            // useNavigate() Link 컴포넌트를 사용하지 않고 다른 페이지로 이동하는 hook
            //      사용법 :
            // const navigate = useNavigate();
            // navigate(-1) : 자바스크립트 사용해 뒤로가기 (앞 페이지로 이동) ,
            // 숫자를 음수로 입력 시 해당 = 뒤로 이동 / 숫자를 양수로 입력 시 해당 = 앞으로 이동
            // navigate('/url') // 지정한 url로 이동

            <BrowserRouter>
                <Routes>
                    <Route path = {"/"} element={<Layout/> }>
                        {/* / 후 밑의 path들은 자식 형태로 들어감 */}
                        <Route index element={<Home/> }/>
                        <Route path={"blogs"} element={<Blogs/>} />
                        <Route path={"Contact"} element={<Contact/>}/>
                        <Route path={"*"} element={<NoPage/>} />
                        <Route path={"profile/:username/:test"} element={<Profile/>} />
                                {/*    url 파라미터 방식*/}
                        <Route path={"board1/:boardIdx"} element = {<Board1/>}/>
                        <Route path={"board2"} element = {<Board2/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>

            // <div>
            //     {/*header*/}
            //     <div>
            //         <Header/>
            //     </div>
            //
            //     <div style={styles.wrapper}>
            //         <nav>
            //             <BrowserRouter>
            //                 <Routes>
            //                     <Route path={"/"} element={<LayoutAnother/>}>
            //                         <Route index element={<HomeAnother/>}/>
            //                         <Route path={"about"} element={<About/>}/>
            //                         <Route path={"board"} element={<Board/>}/>
            //                         <Route path={"BoardPageMove"} element={<BoardPageMove/>}/>
            //                         <Route path={"BoardPageView"} element={<BoardPageView/>}/>
            //                         <Route path={"*"} element={<NoPage/>}/>
            //                     </Route>
            //                 </Routes>
            //             </BrowserRouter>
            //         </nav>
            //     </div>
            //     {/*content*/}
            //
            //     {/*  footer  */}
            //     <FooterA className={"sticky-bottom"} style={styles.footer}/>
            // </div>
    )
}

export default App7;

// Quest 1 ) 주소의 웹 페이지를 리엑트 이용해 컴포넌트 구성을 하고 해당 페이지의 네비게이션 클릭 시 다른
//          페이지의 네비게이션 메뉴 클릭 시 다른 페이지의 내용을 출력되도록 react-router-dom 사용해 각각 페이지
//          표시하는 프로그램 작성하기
//              1. 메뉴 구성 : Main, About, board