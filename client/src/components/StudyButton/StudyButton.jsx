import React from "react";

export default function StudyButton({foreing}){
    return(
        <button className="study-button">{foreing? "To apply!" : "Подать заявку!"}</button>
    );
}