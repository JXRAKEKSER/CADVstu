import React from "react";

export default function Map({locale}){

    return(
        <>
        {locale==='eng'? (<iframe className="map info__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaa7a05e0837e38bcb085e1dcaa23fdefb280e46b6a5eeb9d4276f0e691fab5c4&amp;source=constructor"
         height="240" frameBorder="0"></iframe>):(

            <iframe className="map info__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1feccff84e6fbe5f594f280232eb7bed722967b6252b534dda2cf0e3897aa5df&amp;source=constructor" 
            width="320" height="240" frameBorder="0">
            </iframe>
        )}
        </>
    );
}