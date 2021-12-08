import React, {useContext, useState} from "react";
import QuestionCard from "./QuestionCard/QuestionCard";
import {LocaleContext} from "../../App";
export default function Details(){

    const foreignState = useContext(LocaleContext);
    const questionList = foreignState?.programDetails?.map((questionCard) => {

       return <QuestionCard key={questionCard._id} questionData = {questionCard}/>
    })
    return(
        <section className="details" id="details">
            <div className="details__container">
                {questionList}
            </div>
        </section>
    );
}