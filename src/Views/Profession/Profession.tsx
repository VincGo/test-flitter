import React, {FormEvent, MouseEvent, useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import Title from "../../Components/Title";
import "./profession.scss"
import {jobs, headerArr} from "../../Services/dataArray";
import button_plus from "../../Assets/img/button_plus.svg"

export interface Step {
    nextStep: any;
    getData: any;
    data: string
}

const Profession = ({nextStep, getData, data}: Step) => {
    const [jobsArr, setJobsArr] = useState<string[]>([])
    const [moreProfession, setMoreProfession] = useState<boolean>(false)

    function getInputRadio(e:FormEvent) {
        getData("job", e.currentTarget.id)
    }

    const jobLimited = jobsArr.slice(0, 4).map((j, i)=>
        <div key={i} className={"border-input border-r-10 py-15 px-20 d-flex justify-content-between mb-10"}>
            <label className={"font-size-18 color-light-black"} htmlFor={j}>{j}</label>
            <input className={"inputRadio"} type={"radio"} value={j} id={j} name={"jobs"} onChange={getInputRadio}/>
        </div>
    )

    const allJob = jobsArr.map((j, i)=>
        <div key={i} className={"border-input border-r-10 py-15 px-20 d-flex justify-content-between mb-10"}>
            <label className={"font-size-18 color-light-black"} htmlFor={j}>{j}</label>
            <input className={"inputRadio"} type={"radio"} value={j} id={j} name={"jobs"} onChange={getInputRadio}/>
        </div>
    )

    function next (e: MouseEvent){
        e.preventDefault()
        nextStep()
    }

    //Remplace les underscore dans le nom des métiers par un espace
    function replaceUnderscoreArray (arr: string[]) {
        const newArr = []
        const regex = /_/gi
        for(let i=0; i<arr.length; i++) {
            let string = arr[i].replace(regex, " ")
            newArr.push(string)
        }
        setJobsArr(newArr)
    }

    function showMoreProfession () {
        setMoreProfession(!moreProfession)
    }

    useEffect(() => {
        replaceUnderscoreArray(jobs)
    }, [])

    return (
        <div>
            <Header headerArr={headerArr} />
            <main>
                <Title title={"Votre profession"} />
                {moreProfession ? allJob : jobLimited}
                <div className={"d-flex justify-content-center pointer"} onClick={showMoreProfession}>
                    <p className={"font-weight-700 color-light-black"}>Voir plus de professions</p>
                    <img  className={"ml-15"} src={button_plus} alt="More profession"/>
                </div>
                {data && <button onClick={next}
                         className={"nextButton bg-red border-r-10 font-weight-700 color-white border-none font-size-16 mt-30 pointer"}>
                    Suivant
                </button>}
            </main>
        </div>
    );
};

export default Profession;