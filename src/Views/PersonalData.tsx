import React, {MouseEvent} from 'react';
import Header from "../Components/Header/Header";
import Title from "../Components/Title";

export interface Step {
    nextStep: any;
    prevStep: any
}

const PersonalData = ({nextStep, prevStep}: Step) => {

    const headerArr: string[] = ['voiture', 'infos', 'usage']

    function next (e: MouseEvent){
        e.preventDefault()
        nextStep()
    }

    function prev (e: MouseEvent){
        e.preventDefault()
        prevStep()
    }

    return (
        <div>
            <Header headerArr={headerArr} />
            <main>
                <Title title={"Une dernière chise !"} />
                <button onClick={prev}>Retour</button>
                <button onClick={next}>Suivant</button>
            </main>
        </div>
    );
};

export default PersonalData;