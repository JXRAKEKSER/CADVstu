import React, {useContext} from "react";

export default function LocaleSwitch({toogle, locale}){

    function turnOfEngHandler(){
        toogle('ru');
    }
    function turnOnEngHandler(){
        toogle('eng');
    }

    return(
        <div className="locale-switch header__locale-switch">
            <a className={!(locale === 'eng') ? "locale-switch__link locale-switch__link_active" : "locale-switch__link"} onClick={turnOfEngHandler}>Ru</a>
            <a className={locale === 'eng' ? "locale-switch__link locale-switch__link_active" : "locale-switch__link"} onClick={turnOnEngHandler}>Eng</a>
        </div>
    );
}