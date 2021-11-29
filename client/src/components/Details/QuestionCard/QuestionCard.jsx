import React, { useState } from "react";
import CheckMarkButton from './CheckMarkButton/CheckMarkButton'

export default function QuestionCard({questionData}){
   const [isOpened, setIsOpened] = useState(false);
   const toogleIsOpened = (value) => {setIsOpened(!value)}
    return(
        <>
            {!isOpened ? (
            <div className="question-card">
                <CheckMarkButton toogleIsOpened = {toogleIsOpened} isOpened={isOpened}/>
                <h3 className="question-card__text">{questionData.question}</h3>
            </div>
            ) : (
                <div className="question-card">
                    <CheckMarkButton toogleIsOpened = {toogleIsOpened} isOpened={isOpened}/>
                    <h3 className="question-card__text question-card__text_opened">{questionData?.question}</h3>
                    <p className="question-card__answer">{questionData?.answer}</p>
            </div>
            )}
        </>
            
        
    )
}