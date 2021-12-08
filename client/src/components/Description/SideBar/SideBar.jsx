import React from "react";
import DocumentsButton from "../DocumentsButton/DocumentsButton";
import Map from "../Map/Map";
import personPhoto from '../../../source/images/png-images/MVSherbakovImg.png'
export default function SideBar({foreign, toogleVisibleMenu}){

    function overlayClickHandler(evt){
        if(evt.target.classList.contains("sidebar")){
            toogleVisibleMenu();
        }
    }
    return(
        <div onClick={overlayClickHandler} className="sidebar">
            <button onClick={toogleVisibleMenu} className="info__menu-button info__menu-button_close"></button>
            <div className="sidebar__container">
                <img className="info__person-img" src={personPhoto}/>
                <h2 className = "info__person-role">{foreign? "Head of department":"Заведующий кафедрой"}</h2>
                <p className="info__person-name">{foreign? "Maxim Vladimirovich Shcherbakov":"Максим Владимирович Щербаков"}</p>
                <Map foreign={foreign}/>
                <DocumentsButton foreign={foreign} />
            </div>
        </div>
    )
}