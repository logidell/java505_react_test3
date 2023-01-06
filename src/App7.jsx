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

            // <BrowserRouter>
            //     <Routes>
            //         <Route path = {"/"} element={<Layout/> }>
            //             <Route index element={<Home/> }/>
            //             <Route path={"blogs"} element={<Blogs/>} />
            //             <Route path={"Contact"} element={<Contact/>}/>
            //             <Route path={"*"} element={<NoPage/>} />
            //         </Route>
            //     </Routes>
            // </BrowserRouter>

            <div>
                {/*header*/}
                <div>
                    <Header/>
                </div>

                <nav>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"} element={<LayoutAnother/>}>
                                <Route index element={<HomeAnother/>}/>
                                <Route path={"about"} element={<About/>}/>
                                <Route path={"board"} element={<Board/>}/>
                                <Route path={"*"} element={<NoPage/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </nav>

                {/*content*/}

                {/*  footer  */}
                <FooterA/>
            </div>
    )
}

export default App7;

// Quest 1 ) 주소의 웹 페이지를 리엑트 이용해 컴포넌트 구성을 하고 해당 페이지의 네비게이션 클릭 시 다른
//          페이지의 네비게이션 메뉴 클릭 시 다른 페이지의 내용을 출력되도록 react-router-dom 사용해 각각 페이지
//          표시하는 프로그램 작성하기
//              1. 메뉴 구성 : Main, About, board