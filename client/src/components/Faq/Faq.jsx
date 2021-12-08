import React, {useContext} from "react";
import FaqCard from "./FaqCard/FaqCard";
import {LocaleContext} from "../../App";
export default function Faq({data, foreign}){

    const foreignState = useContext(LocaleContext);
    
    const faqList = foreignState?.faq?.map( (faqCard, i) => {
       return <FaqCard key={faqCard._id} data={faqCard} locale={foreignState.locale}/>
    })
    return(
        <section className="faq" id="faq">
            <div className="wrapper">
                <div className="faq__container">
                    <h2 className="faq__pointer">./FAQ</h2>
                    <div className="faq__cards-container">
                        <h2 className="faq__title">{foreignState.locale === 'eng'? "Frequently asked questions" : "Часто задаваемы вопросы"}</h2>
                        {faqList}
                    </div>
                </div>
            </div>   
            
        </section>
    )
}