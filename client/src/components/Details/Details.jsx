import React from "react";
import QuestionCard from "./QuestionCard/QuestionCard";

export default function Details({data, foreign}){
    let detailsNode = null;
    if(foreign){
        detailsNode = data?.eng.programDetails;
    }else{
        
        detailsNode = data?.ru.programDetails;
    }
    console.log(detailsNode)
    const questionList = detailsNode?.map(questionCard => {
       return <QuestionCard questionData = {questionCard}/>
    })
    return(
        <section className="details" id="details">
            <div className="wrapper">
                {questionList}
            </div>
        </section>
    );
}