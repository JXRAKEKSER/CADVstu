import React from "react";

export default function Navigation({foreing}){
    return(
        <div className="navigation">
            <a className="navigation__link" href="#description">
                {foreing ? "About program" : "О программе"}</a>
            <a className="navigation__link" href="#details">
                {foreing ? "Description" : "Описание"}</a>
            <a className="navigation__link" href="#faq">FAQ</a>
            <a className="navigation__link" href="#contact">
                {foreing ? "Contact Us" : "Связь с нами"}</a>
        </div>
    )
}