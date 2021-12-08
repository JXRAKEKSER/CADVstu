import React, {useContext} from "react";
import descriptionPointer from '../../source/images/svg-images/checkMark.svg';
import Info from "./Info/Info";
import Quote from "./Quote/Quote";
import {LocaleContext} from "../../App";
export default function Description(){
    const foreingState = useContext(LocaleContext);

    return(
        <section className="description" id="description">
            <div className="wrapper">
            <img className="description__pointer" src={descriptionPointer}/>
                <div className="description__content">
                    <p className="description__intro">{foreingState?.description?.intro}</p>
                    <Quote data={foreingState?.description}/>
                    <h2 className="description__pitch-title">{foreingState?.description?.pitchTitle}</h2>
                    <p className="descroption__pitch-text">{foreingState?.description?.pitchText}</p>
                </div>
                <Info locale={foreingState.locale}/>
            </div>
        </section>
    );
}