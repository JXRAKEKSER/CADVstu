import React from "react";
import FaqCard from "./FaqCard/FaqCard";

export default function Faq({data, foreign}){
    let faqNode = null;
    
    if(foreign){
        faqNode = data?.eng.faq;
    }else{
        faqNode = data?.ru.faq;
    }
    
    const faqList = faqNode?.map( faqCard => {
       return <FaqCard data={faqCard} />
    })
    return(
        <section className="faq" id="faq">
            <div className="wrapper">
                <div className="faq__container">
                    <h2 className="faq__pointer">./FAQ</h2>
                    <div className="faq__cards-container">
                        <h2 className="faq__title">{foreign? "Frequently asked questions" : "Часто задаваемы вопросы"}</h2>
                        {faqList}
                    </div>
                </div>
            </div>   
            
        </section>
    )
}