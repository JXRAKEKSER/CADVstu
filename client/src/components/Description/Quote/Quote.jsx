import React from "react";
import quoteImage from '../../../source/images/png-images/QuoteImg.png'
export default function Quote({data}){
    
    return(
        <div className="quote description__quote">
            <p className="quote__text">{data?.quote.quoteText}</p>
            <p className="quote__author">{data?.quote.quoteAutor}</p>
            <img className="quote__author-img" src={quoteImage}/>
        </div>
    )
}