import React from "react";

export default function ContactForm({foreign}){
    return(
        <form className="contact-form footer__contact-form" name="contact-form">
            <input className="contact-form__input" name="email" placeholder="Email"/>
            <textarea className="contact-form__textarea" name="question" placeholder={foreign? "Question" : "Вопрос"}></textarea>
            <button className="submit-button">{foreign? "Submit" : "Отправить"}</button>
        </form>
    )
}