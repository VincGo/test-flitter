import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import Title from "../../Components/Title";
import {headerArr} from "../../Services/dataArray";
import userIcone from "../../Assets/img/user_icone.svg";
import userMail from "../../Assets/img/icone_mail.svg";
import "./personalData.scss";

export interface Step {
    nextStep: any;
    prevStep: any;
    getData: any;
    data: any;
}

const PersonalData = ({nextStep, prevStep, getData, data}: Step) => {
    const [formData, setFormData] = useState<boolean>(false)
    // eslint-disable-next-line no-control-regex
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3})/i;

    function next (e: MouseEvent){
        e.preventDefault()
        nextStep()
    }

    function getInputData (e:ChangeEvent<HTMLInputElement>) {
        getData(e.target.name, e.target.value)
    }

    function changeCheckBox (e: ChangeEvent) {
        getData(e.currentTarget.id, !data.send_estimate)
    }

    useEffect(() => {
        if(data.email.match(emailRegex) && data.last_name && data.first_name) {
            setFormData(true)
        } else {
            setFormData(false)
        }
    }, [data])

    return (
        <div>
            <Header headerArr={headerArr} prevStep={prevStep}/>
            <main>
                <Title title={"Une dernière chose !"} />
                <form>
                    <div className={"d-flex"}>
                        <div className={"d-flex border-input border-r-10 py-15 px-20"}>
                            <img src={userIcone} alt="nom"/>
                            <input className={"border-none outline-none font-size-18 w-100 ml-5"} type="text"
                                   placeholder={"Nom"} name={"first_name"} defaultValue={data.first_name} onChange={getInputData}/>
                        </div>
                        <div className={"d-flex border-input border-r-10 py-15 px-20 ml-10"}>
                            <img src={userIcone} alt="prénom"/>
                            <input className={"border-none outline-none font-size-18 w-100 ml-5"} type="text"
                                   placeholder={"Prénom"} name={"last_name"} defaultValue={data.last_name} onChange={getInputData}/>
                        </div>
                    </div>
                    <div className={"d-flex border-input border-r-10 py-15 px-20 mt-30"}>
                        <img src={userMail} alt="adresse mail"/>
                        <input className={"border-none ml-5 outline-none font-size-18 w-100"} type="email"
                               placeholder={"Adresse mail"} name={"email"} defaultValue={data.email} onChange={getInputData}/>
                    </div>
                    <input type="checkbox" id={"send_estimate"} className={"mt-30"} checked={data.send_estimate} onChange={changeCheckBox}/>
                    <label htmlFor={"sendEstimate"} className={"font-size-14 color-light-black ml-5"}>
                        J'accepte que Flitter m'envoie mon devis et des conseils pour protéger ma voiture.
                    </label>
                </form>
                {formData && <button onClick={next}
                         className={"nextButton bg-red border-r-10 font-weight-700 color-white border-none font-size-16 mt-30 pointer px-30"}>
                    Finaliser votre devis (pour de bon)
                </button>}
            </main>
        </div>
    );
};

export default PersonalData;