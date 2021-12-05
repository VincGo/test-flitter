import React, {MouseEvent} from 'react';
import Header from "../Components/Header/Header";
import Title from "../Components/Title";
import {headerArr} from "../Services/dataArray";

export interface Step {
    nextStep: any;
    prevStep: any
}

const PersonalData = ({nextStep, prevStep}: Step) => {

    function next (e: MouseEvent){
        e.preventDefault()
        nextStep()
    }

    return (
        <div>
            <Header headerArr={headerArr} prevStep={prevStep}/>
            <main>
                <Title title={"Une dernière chise !"} />
                <button onClick={next}>Suivant</button>
            </main>
        </div>
    );
};

export default PersonalData;