import React, {useContext, useState} from "react";
import ContactForm from "./ContactForm/ContactForm";
import {LocaleContext} from "../../App";
export default function Footer(){
    const foreignState = useContext(LocaleContext);

    return(
        <footer className="footer" id="contact">
            <div className="wrapper">
                
                <h2 className="footer__title">{foreignState.locale === 'eng' ?"Form for the most curious":"Форма для самых любознательных"}</h2>
                <ContactForm locale={foreignState.locale}/>
                
            </div>
        </footer>
    )
}