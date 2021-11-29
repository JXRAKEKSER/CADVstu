import React from "react";
import ContactForm from "./ContactForm/ContactForm";

export default function Footer({foreign}){
    return(
        <footer className="footer" id="contact">
            <div className="wrapper">
                
                <h2 className="footer__title">{foreign?"Form for the most curious":"Форма для самых любознательных"}</h2>
                <ContactForm foreign={foreign}/>
                
            </div>
        </footer>
    )
}