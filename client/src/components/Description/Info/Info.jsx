import React from "react";
import personPhoto from '../../../source/images/png-images/MVSherbakovImg.png'
import DocumentsButton from "../DocumentsButton/DocumentsButton";
import Map from "../Map/Map";
export default function Info({foreign}){
    return(
        <div className="info description__info">
            <img className="info__person-img" src={personPhoto}/>
            <h2 className = "info__person-role">{foreign? "Head of department":"Заведующий кафедрой"}</h2>
            <p className="info__person-name">{foreign? "Maxim Vladimirovich Shcherbakov":"Максим Владимирович Щербаков"}</p>
            <Map foreign={foreign}/>
            <DocumentsButton foreign={foreign} />
        </div>
    )
}