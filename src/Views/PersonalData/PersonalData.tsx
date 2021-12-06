import React, {MouseEvent} from 'react';
import Header from "../../Components/Header/Header";
import Title from "../../Components/Title";
import {headerArr} from "../../Services/dataArray";
import userIcone from "../../Assets/img/user_icone.svg";
import userMail from "../../Assets/img/icone_mail.svg";
import "./personalData.scss";

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
                <Title title={"Une dernière chose !"} />
                <form>
                    <div className={"d-flex"}>
                        <div className={"d-flex border-input border-r-10 py-15 px-20"}>
                            <img src={userIcone} alt="nom"/>
                            <input className={"border-none outline-none font-size-18 w-100 ml-5"} type="text"
                                   placeholder={"Nom"}/>
                        </div>
                        <div className={"d-flex border-input border-r-10 py-15 px-20 ml-10"}>
                            <img src={userIcone} alt="prénom"/>
                            <input className={"border-none outline-none font-size-18 w-100 ml-5"} type="text"
                                   placeholder={"Prénom"}/>
                        </div>
                    </div>
                    <div className={"d-flex border-input border-r-10 py-15 px-20 mt-30"}>
                        <img src={userMail} alt="adresse mail"/>
                        <input className={"border-none ml-5 outline-none font-size-18 w-100"} type="email"
                               placeholder={"Adresse mail"}/>
                    </div>
                    <input type="checkbox" id={"sendEstimate"} className={"mt-30"}/>
                    <label htmlFor={"sendEstimate"} className={"font-size-14 color-light-black ml-5"}>
                        J'accepte que Flitter m'envoie mon devis et des conseils pour protéger ma voiture.
                    </label>
                </form>
                <button onClick={next} className={"nextButton bg-red border-r-10 font-weight-700 color-white border-none font-size-16 mt-30 pointer px-30"}>Finaliser votre devis (pour de bon)</button>
            </main>
        </div>
    );
};

export default PersonalData;