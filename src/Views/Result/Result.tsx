import React from 'react';
import Header from "../../Components/Header/Header";
import Title from "../../Components/Title";
import {excess_bdg, excess_da, headerArrResult} from "../../Services/dataArray";
import './result.scss'
import logoCar from "../../Assets/img/logo_car.svg"
import logoProtection from "../../Assets/img/logo_protection.svg"
import logoCarReplace from "../../Assets/img/logo_car_replace.svg"

export interface Step {
    prevStep: any;
}

const Result = ({prevStep}: Step) => {

    return (
        <div>
            <Header headerArr={headerArrResult} prevStep={prevStep}/>
            <div id={"container-result"} className={"d-flex"}>
                <section className={"border-input px-20 pt-15 pb-25 border-r-10 height-fit"}>
                    <Title title={"Vos franchises"}/>
                    <p className={"font-size-18 color-light-black"}>L’assistance 0 km est incluse dans tous nos contrats, boostez votre couverture.</p>
                    <p className={"font-size-18 color-light-black mb-5"}>Bris de glace</p>
                    <div className={"d-flex"}>
                        {excess_bdg && excess_bdg.map((bdg, index) =>
                            <div key={index} className={"custom-radio mr-10"}>
                                <input type="radio" id={"bdg" + bdg.name} name={"bdg"}/>
                                <label htmlFor={"bdg" + bdg.name} className={"color-light-black font-size-18 border-input border-r-10 d-flex justify-content-center align-items-center"} >{bdg.value}</label>
                            </div>
                        )}
                    </div>
                    <p className={"font-size-18 color-light-black mb-5"}>Accident</p>
                    <div className={"d-flex"}>
                        {excess_da && excess_da.map((da, index) =>
                            <div key={index} className={"custom-radio mr-10"}>
                                <input type="radio" id={"da" + da.name} name={"da"}/>
                                <label htmlFor={"da" + da.name} className={"color-light-black font-size-18 border-input border-r-10 d-flex justify-content-center align-items-center"} >{da.value}</label>
                            </div>
                        )}
                    </div>
                </section>
                <section id={"resultPrice"} className={"border-r-10 ml-30"}>
                    <h1 className={"text-center mb-10"}>Votre prix estimé</h1>
                    <div className={"d-flex justify-content-center"}>
                        <p className={"font-size-48 font-weight-700 m-0"}>54€</p>
                        <p className={"font-size-18 font-weight-700 mt-10 ml-10"}>/mois</p>
                    </div>
                    <div className={"bg-white border-r-10 p-10 border-input m-30"}>
                        <div className={"d-flex px-10"}>
                            <img src={logoCar} alt="logo car"/>
                            <p className={"ml-20 font-weight-700 line-h-20 color-light-black font-size-14"}>Tesla Model 3 Long Range v1.2 4 Seat Backslash</p>
                        </div>
                        <hr className={"border-hr m-0"} />
                        <div className={"d-flex px-10"}>
                            <img src={logoProtection} alt="logo protection"/>
                            <p className={"ml-20 font-weight-700 line-h-20 color-light-black font-size-14"}>Formule Essentielle 8000 km
                                <br/>
                                45€ / mois
                            </p>
                        </div>
                        <hr className={"border-hr m-0"} />
                        <div className={"d-flex px-10"}>
                            <img src={logoCarReplace} alt="logo car replace"/>
                            <p className={"ml-20 font-weight-700 line-h-20 color-light-black font-size-14"}>Véhicule de remplacement
                                <br/>
                                2€ / mois
                            </p>
                        </div>
                    </div>
                    <div className={"d-flex justify-content-center w-80 m-auto mb-30"}>
                        <button className={"nextButton bg-red border-r-10 font-weight-700 color-white border-none font-size-16 pointer w-100"}>
                            Enregistrer les franchises
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Result;