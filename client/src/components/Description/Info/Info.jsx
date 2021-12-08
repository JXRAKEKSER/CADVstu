import React, { useState } from "react";
import personPhoto from '../../../source/images/png-images/MVSherbakovImg.png'
import DocumentsButton from "../DocumentsButton/DocumentsButton";
import Map from "../Map/Map";
import SideBar from "../SideBar/SideBar";
export default function Info({locale}){
    const [visibleMenu, setVisibleMenu] = useState(false);
    function menuButtonHandler(){
        setVisibleMenu(!visibleMenu);
    }
    return(

            <>
            {!visibleMenu ? <>
                <div className="info description__info">
                    <img className="info__person-img" src={personPhoto}/>
                    <h2 className = "info__person-role">{locale==='eng'? "Head of department":"Заведующий кафедрой"}</h2>
                    <p className="info__person-name">{locale==='eng'? "Maxim Vladimirovich Shcherbakov":"Максим Владимирович Щербаков"}</p>
                    <Map locale={locale}/>
                    <DocumentsButton locale={locale} />
                </div>
                <button onClick={menuButtonHandler} className="info__menu-button"></button>
                </>
                : 
                <SideBar toogleVisibleMenu={menuButtonHandler} locale={locale}/>
            }
            </>
        
    )
}