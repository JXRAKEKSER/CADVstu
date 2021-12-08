import React from "react";

export default function ContactForm({locale}){

    
    return(
        <form className="contact-form footer__contact-form" name="contact-form">
            <input className="contact-form__input" name="email" placeholder="Email"/>
            <textarea className="contact-form__textarea" name="question" placeholder={locale === 'eng'? "Question" : "Вопрос"}></textarea>
            <button onClick={(evt) => {evt.preventDefault()}} className="submit-button">{locale === 'eng' ? "Submit" : "Отправить"}</button>
        </form>
    )
}