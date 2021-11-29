import React from "react";
import descriptionPointer from '../../source/images/svg-images/checkMark.svg';
import Info from "./Info/Info";
import Quote from "./Quote/Quote";
export default function Description({data, foreign}){
    
    let nodeDescription = null;
    if(foreign){
        nodeDescription = data?.eng.description;
    }else{
        nodeDescription = data?.ru.description;
    }
    
    
    return(
        <section className="description" id="description">
            <div className="wrapper">
            <img className="description__pointer" src={descriptionPointer}/>
                <div className="description__content">
                    <p className="description__intro">{nodeDescription?.intro}</p>
                    <Quote data={nodeDescription}/>
                    <h2 className="description__pitch-title">{nodeDescription?.pitchTitle}</h2>
                    <p className="descroption__pitch-text">{nodeDescription?.pitchText}</p> 
                </div>
                <Info foreign={foreign}/>
            </div>
        </section>
    );
}