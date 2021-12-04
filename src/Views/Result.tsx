import React, {MouseEvent} from 'react';
import Header from "../Components/Header/Header";
import Title from "../Components/Title";

export interface Step {
    prevStep: any;
}

const Result = ({prevStep}: Step) => {

    const headerArr: string[] = ['voiture', 'infos', 'usage']

    function prev (e: MouseEvent){
        e.preventDefault()
        prevStep()
    }

    return (
        <div>
            <Header headerArr={headerArr} />
            <main>
                <Title title={"Vos franchises"} />
                <button onClick={prev}>Retour</button>
            </main>
        </div>
    );
};

export default Result;