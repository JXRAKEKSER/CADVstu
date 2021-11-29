import React, { useContext } from "react";
import { CheckMarkButtonProvider } from "../QuestionCard";

export default function CheckMarkButton({toogleIsOpened, isOpened, mixClass}){
    
    function handleClick(){
        toogleIsOpened(isOpened);
    }
    let customClassName = null;
    if(isOpened){
        customClassName = "check-mark-button check-mark-button_opened";
    }else{
        customClassName = "check-mark-button";
    }
    return(
        
        <button onClick={handleClick} className={`${customClassName} ${mixClass}`}></button>
        
        
    )
}