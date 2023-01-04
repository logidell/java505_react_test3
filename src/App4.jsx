import React from "react";
import MainImg from "./img/KakaoTalk_20230103_141850280.png"
import AboutSectionImg from "./img/KakaoTalk_20230103_141857078.png"

import AboutSection from "./leCatering/AboutSection";
// import MenuSection from "./leCatering/MenuSection";
import ContactSection from "./leCatering/ContactSection";


import HeaderImg from "./img/KakaoTalk_20230103_141850280.png";
import AboutImg from "./img/KakaoTalk_20230103_141857078.png"
import MenuIng from "./img/KakaoTalk_20230103_141900791.png"
import AboutSectionG from "./gourmet/AboutSection";
import MenuSection from "./gourmet/MenuSection";
import ContactBox from "./gourmet/ContactBox";

// function App4() {
//     const styles = {
//         pageContantSt: {
//             maxWidth: 1100
//         },
//         headerNav: {
//             letterSpacing: 4
//         },
//         aboutImgSize: {
//             maxWidth: "100%",
//             maxheight: "auto%",
//             width: 700,
//             height :700,
//
//         },
//         hrLine: {
//             borderTop: "1px solid #b7b7b7"
//         },
//         pText: {
//             color: 'rgb(118,118,118)',
//             fontSize: "small"
//         }
//
//     }
//     return (
//             <div>
//                 {/*nav*/}
//                 <nav className="navbar navbar-expand-lg bg-light">
//                     <div className="container-fluid">
//                         <a className="navbar-brand" href="#">Navbar</a>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
//                                 aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
//                             <div className="navbar-nav col-4">
//                                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//                                 <a className="nav-link" href="#">Features</a>
//                                 <a className="nav-link" href="#">Pricing</a>
//                                 <a className="nav-link disabled">Disabled</a>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//
//                 {/*main img*/}
//                 <img src={MainImg} className="vw-100 mb-4"/>
//
//
//                 {/*    about Section */}
//                 <div className="container text-content-center p-4">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <img src={AboutSectionImg} style={styles.aboutImgSize} className="p-2"/>
//                         </div>
//                         <div className="col-md-4 offset-md-2 p-2 align-content-center">
//                             <AboutSection/>
//                         </div>
//                     </div>
//                 </div>
//
//                 <hr className="m-5 p-5" style={styles.hrLine}/>
//
//                 {/* Menu Section*/}
//                 <div className="container text-center p-4">
//                     <div className="row">
//
//                         <div className="col-md-4">
//                             <MenuSection style={styles.pText}/>
//                         </div>
//                         <div className="col-md-6 offset-md-2">
//                             <img src={AboutSectionImg} style={styles.aboutImgSize} className="p-2"/>
//                         </div>
//                     </div>
//                 </div>
//
//                 <hr className="m-5 p-5" style={styles.hrLine}/>
//                 <div className = "m-5 p-5">
//                     <ContactSection/>
//                 </div>
//                 <footer className = "p-5 text-center bg-light "> copy is </footer>
//
//             </div>
//
//
//     )
// }

function App4() {
    const styles = {
        navBarColor: {
            backgroundColor: 'rgb(255,255,255)',
            boxShadow: "0 10px 10px -5px gray ",
        },
        HeaderImg: {
            position: "relative"
        },
        HeaderText: {
            position: "absolute",
            left: 35,
            bottom: 20
        }
    }

    return (
            <div>

                {/* nav */}
                <nav className="navbar navbar-expand-lg" style={styles.navBarColor}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav col-3">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                                <a className="nav-link" href="#">Menu</a>
                                <a className="nav-link" href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* header */}

                <header>
                    <div className="container-xl" style={styles.HeaderImg}>
                        <img src={HeaderImg} className="w-100"/>

                        <div style={styles.HeaderText} className="col-md-10">
                            <h1 className="fw-normal"> Le Catering </h1>
                        </div>
                    </div>
                </header>

                <hr className="m-4 opacity-0"/>

                <main className="container">
                    {/* About section */}
                    <AboutSectionG/>

                    <hr className="m-4 opacity-0"/>

                    {/* menu section */}
                    <MenuSection/>

                    <hr className="m-4 opacity-0"/>
                    {/* contact section */}

                    <ContactBox/>
                </main>
                {/*  footer  */}
                <footer className="text-center">
                    <p>Powered by w3.css</p>
                </footer>

            </div>
    )

}

export default App4;