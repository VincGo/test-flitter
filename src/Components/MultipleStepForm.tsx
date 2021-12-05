import React, {useEffect, useState} from 'react';
import Car from "../Views/Car/Car";
import Profession from "../Views/Profession/Profession";
import PersonalData from "../Views/PersonalData";
import Result from "../Views/Result";

export interface MultipleStepFormInterface {
    step: number;
    brand: string;
    job: string;
    first_name: string;
    last_name: string;
    email: string;
}

const MultipleStepForm = () => {
    const [data, setData] = useState<MultipleStepFormInterface>({
        step: 1,
        brand: "",
        job: "",
        first_name: "",
        last_name: "",
        email: "",
    })

    //Formulaire suivant
    function nextStep() {
        setData({...data, step: data.step + 1})
    }

    //Formulaire précédent
    function prevStep() {
        setData({...data, step: data.step - 1})
    }

    //Récupère les données des formulaires
    function getData (name: string, value: string) {
        setData({...data, [name]: value})
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    switch (data.step) {
        case 1:
            return <Car nextStep={nextStep} prevStep={prevStep} getData={getData} data={data.brand}/>
        case 2:
            return <Profession nextStep={nextStep} prevStep={prevStep} getData={getData} data={data.job}/>
        case 3:
            return <PersonalData nextStep={nextStep} prevStep={prevStep}/>
        case 4:
            return <Result prevStep={prevStep}/>
    }

    return (<div/>)
}
export default MultipleStepForm;