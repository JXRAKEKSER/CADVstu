import React from "react";

export default function StudyButton({locale}){
    return(
        <button className="study-button">{locale === 'eng'? "To apply!" : "Подать заявку!"}</button>
    );
}