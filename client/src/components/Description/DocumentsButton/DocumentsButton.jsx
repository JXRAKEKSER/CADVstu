import React from "react";

export default function DocumentsButton({locale}){

    function handleClick(evt){
        evt.preventDefault();

    }
    return(
        <a href="https://www.vstu.ru/university/fakultety-i-kafedry/fakultet-podgotovki-inostrannykh-spetsialistov/magistratura/" 
            target="_blank"
        className="documents-button info__documents-button">{locale==='eng' ? "Admission rules" : "Правила приема"}</a>
    )
}