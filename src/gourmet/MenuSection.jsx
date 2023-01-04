import React from "react";
import SettingImg from "./SettingImg";
import MenuImg from "../img/KakaoTalk_20230103_141900791.png";
import MenuSectionDetail from "./MenuSectionDetail";

function MenuSection() {
    return (
            <div className="row justify-content-center my-5 py-5 border-top">
                <MenuSectionDetail/>
                <SettingImg img={MenuImg}/>
            </div>

    );

}

export default MenuSection;