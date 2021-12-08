import React, {useContext} from "react";
import durationIcon from '../../source/images/svg-images/durationIcon.svg';
import peopleIcon from '../../source/images/svg-images/peopleIcon.svg';
import certificateIcon from '../../source/images/svg-images/certificateIcon.svg';
import {LocaleContext} from "../../App";
export default function Icons({data, foreign}){

    const foreignState = useContext(LocaleContext);
    let iconsNode = null;
    if(foreign){
        iconsNode = data?.eng.programParams;
    }else{
        iconsNode = data?.ru.programParams;
    }

    return(
        <section className="icons">
            {/*<div className="wrapper">*/}
                <div className="icons__container">
                    <div className="icon icons__icon">

                        <div className="icon__text-container">
                            <h3 className="icon__title">
                                {`${foreignState?.programParams?.programDuration} ${foreignState.locale === 'eng'?" years" : " года"}`}</h3>
                            <p className="icon__subtitle">{foreignState.locale === 'eng'?"Full-time" : "Очная форма"}</p>
                        </div>
                        <img className="icon__img" src={durationIcon}/>
                    </div>
                    <div className="icon icons__icon">

                        <div className="icon__text-container">
                            <p className="icon__subtitle">{`${foreignState?.programParams?.competition.BudgetFunded} ${foreignState.locale === 'eng'?" budget" : " бесплатных"}`}</p>
                            <p className="icon__subtitle">{`${foreignState?.programParams?.competition.paid} ${foreignState.locale === 'eng'?" paid" : " платных"}`}</p>
                            <p className="icon__subtitle">{`${foreignState?.programParams?.competition.benefit} ${foreignState.locale === 'eng'?" benefit" : " контракт"}`}</p>
                        </div>
                        <img className="icon__img" src={peopleIcon}/>
                    </div>
                    {foreignState?.programParams?.accreditation &&(<div className="icon icons__icon">
                        <div className="icon__text-container">
                            <p className="icon__subtitle icon__subtitle_small-content">{foreignState.locale === 'eng'? 'State accreditation' : 'Государственная аккредитация'}</p>
                        </div>
                        <img className="icon__img" src={certificateIcon}/>
                    </div>)}
                </div>
            {/*</div>*/}
        </section>
    );
}