import React from "react";

export default function LocaleSwitch({toogle, foreing}){

    function turnOfEngHandler(){
        toogle(false);
    }
    function turnOnEngHandler(){
        toogle(true);
    }
    
    return(
        <div className="locale-switch header__locale-switch">
            <a className={!foreing ? "locale-switch__link locale-switch__link_active" : "locale-switch__link"} onClick={turnOfEngHandler}>Ru</a>
            <a className={foreing ? "locale-switch__link locale-switch__link_active" : "locale-switch__link"} onClick={turnOnEngHandler}>Eng</a>
        </div>
    );
}