import React,{useState} from "react";
import CheckMarkButton from "../../Details/QuestionCard/CheckMarkButton/CheckMarkButton";

export default function FaqCard({data}){
    
    const [isOpened, setIsOpened] = useState(false);
   const toogleIsOpened = (value) => {setIsOpened(!value)}
    return(
    <>
        {!isOpened ? (
            <div className="faq-card">
                <CheckMarkButton isOpened={isOpened} toogleIsOpened={toogleIsOpened} mixClass = {'check-mark-button_thing'} />
                <h3 className="faq-card__question">{data?.question}</h3>
            </div>
        ) : 
            (<div className="faq-card">
                <CheckMarkButton isOpened={isOpened} toogleIsOpened={toogleIsOpened} mixClass = {'check-mark-button_thing'} />
                <h3 className="faq-card__question">{data?.question}</h3>
                <p className="faq-card__answer">{data?.answer}</p>
            </div>)}
    </>
    )
}