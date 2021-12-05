import React from 'react';
import Header from "../Components/Header/Header";
import Title from "../Components/Title";

export interface Step {
    prevStep: any;
}

const Result = ({prevStep}: Step) => {
    const headerArr: string[] = ['voiture', 'infos', 'usage']

    return (
        <div>
            <Header headerArr={headerArr} prevStep={prevStep}/>
            <main>
                <Title title={"Vos franchises"} />
            </main>
        </div>
    );
};

export default Result;