import React from "react";
import durationIcon from '../../source/images/svg-images/durationIcon.svg';
import peopleIcon from '../../source/images/svg-images/peopleIcon.svg';
import certificateIcon from '../../source/images/svg-images/certificateIcon.svg';
export default function Icons({data, foreign}){
    let iconsNode = null;
    if(foreign){
        iconsNode = data?.eng.programParams;
    }else{
        iconsNode = data?.ru.programParams;
    }
    console.log(iconsNode?.programDuration)
    return(
        <section className="icons">
            {/*<div className="wrapper">*/}
                <div className="icons__container">
                    <div className="icon icons__icon">

                        <div className="icon__text-container">
                            <h3 className="icon__title">{`${iconsNode?.programDuration} ${foreign?" years" : " года"}`}</h3>
                            <p className="icon__subtitle">{foreign?"Full-time" : "Очная форма"}</p>
                        </div>
                        <img className="icon__img" src={durationIcon}/>
                    </div>
                    <div className="icon icons__icon">

                        <div className="icon__text-container">
                            <p className="icon__subtitle">{`${iconsNode?.competition.BudgetFunded} ${foreign?" budget" : " бесплатных"}`}</p>
                            <p className="icon__subtitle">{`${iconsNode?.competition.paid} ${foreign?" paid" : " платных"}`}</p>
                            <p className="icon__subtitle">{`${iconsNode?.competition.benefit} ${foreign?" benefit" : " контракт"}`}</p>
                        </div>
                        <img className="icon__img" src={peopleIcon}/>
                    </div>
                    {iconsNode?.accreditation &&(<div className="icon icons__icon">
                        <div className="icon__text-container">
                            <p className="icon__subtitle icon__subtitle_small-content">{foreign? 'State accreditation' : 'Государственная аккредитация'}</p>
                        </div>
                        <img className="icon__img" src={certificateIcon}/>
                    </div>)}
                </div>
            {/*</div>*/}
        </section>
    );
}