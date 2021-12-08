import React, { useContext } from 'react';
import { LocaleContext } from '../../App';
import Navigation from '../Navigation/Navigation';
import logo from '../../source/images/svg-images/vstuLOGO.svg'
import headerImage from '../../source/images/png-images/Header__img.png'
import LocaleSwitch from '../LocaleSwitch/LocaleSwitch';
import StudyButton from '../StudyButton/StudyButton';
//import data from '../data/data';
export default function Header({toogle}){
    
    const foreingState = useContext(LocaleContext);
    
    return(
        
        <header className="header">
            <div className="wrapper">
                <div className="header__nav-container">
                    <img className="header__logo" src={logo}/>
                    <Navigation />
                    <LocaleSwitch toogle={toogle} locale = {foreingState.locale}/>
                </div>
                <div className="header__content-container">
                    <div className="column-wrap">
                        <h1 className="header__title">{foreingState.locale==='eng' ?"Study at the new magistracy!": "Учись в новой магистратуре!"}</h1>
                        <StudyButton locale = {foreingState.locale}/>
                    </div>
                    <img className="header__img" src={headerImage}/>
                </div>
            </div>
        </header>
    )
}