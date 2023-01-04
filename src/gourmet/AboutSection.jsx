import React from "react";
import AboutImg from "../img/KakaoTalk_20230103_141857078.png";
import AboutSectionDetail from "./AboutSectionDetail"
import SettingImg from "./SettingImg";


function AboutSectionG() {
    return (
            <div>
                <div className="row justify-content-center my-5 py-5">
                    <SettingImg img={AboutImg}/>
                    <AboutSectionDetail/>
                </div>
            </div>
    )

}

export default AboutSectionG;