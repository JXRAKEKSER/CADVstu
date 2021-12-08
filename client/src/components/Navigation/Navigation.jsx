import React, {useContext} from "react";
import {LocaleContext} from "../../App";
export default function Navigation(){
    const foreingState = useContext(LocaleContext)

    return(
        <div className="navigation">
            <a className="navigation__link" href="#description">
                {foreingState.locale==='eng' ? "About program" : "О программе"}</a>
            <a className="navigation__link" href="#details">
                {foreingState.locale==='eng' ? "Description" : "Описание"}</a>
            <a className="navigation__link" href="#faq">FAQ</a>
            <a className="navigation__link" href="#contact">
                {foreingState.locale==='eng' ? "Contact Us" : "Связь с нами"}</a>
        </div>
    )
}