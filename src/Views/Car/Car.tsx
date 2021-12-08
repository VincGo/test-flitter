import React, {useEffect, useState, ChangeEvent, MouseEvent} from 'react';
import Header from "../../Components/Header/Header";
import './car.scss'
import search from "../../Assets/img/fp_search.svg"
import searchBold from "../../Assets/img/fp_search_bold.svg"
import Title from "../../Components/Title";
import {apiService} from "../../Services/apiService";
import peugeot from "../../Assets/img/peugeot.svg"
import renault from "../../Assets/img/renault.svg"
import citroen from "../../Assets/img/citroen.svg"
import volskwagen from "../../Assets/img/volskwagen.svg"
import toyota from "../../Assets/img/toyota.svg"
import mercedes from "../../Assets/img/mercedes.svg"
import ford from "../../Assets/img/ford.svg"
import bmw from "../../Assets/img/bmw.svg"
import {headerArr} from "../../Services/dataArray";
import Loader from "react-loader-spinner"

export interface BrandResult {
    id: number;
    name: string;
}

export interface BrandLogoResult {
    id: number;
    name: string;
    src: string;
    alt: string;
}

export interface nextStep {
    nextStep: any;
    data: string;
    prevStep: any;
    brandData: any;
}

const Car = ({nextStep, data, prevStep, brandData}: nextStep) => {
    const [brand, setBrand] = useState<BrandResult[] | []>([])
    const brandLogoArr: string[] = [peugeot, renault, citroen, volskwagen, toyota, mercedes, ford, bmw]
    const [brandLogoResult, setBrandLogoResult] = useState<BrandLogoResult[] | []>([])

    //Créer un nouveau tableau pour afficher les logos avec les données de la marque
    function newArr(brand: BrandResult[], brandLogoArr: string[]) {
        let arr: BrandLogoResult[] = []
        for (let i = 0; i < brand.length; i++) {
            for (let j = 0; j < brandLogoArr.length; j++) {
                let brandObj: BrandLogoResult = {
                    id: brand[i].id,
                    name: brand[i].name,
                    src: brandLogoArr[j],
                    alt: brand[i].name
                }
                if (brandLogoArr[j].includes(brand[i].name.toLocaleLowerCase())) {
                    arr.push(brandObj)
                }
            }
        }
        setBrandLogoResult(arr)
    }

    //Récupère la valeur de l'input. Sauvegarde si il correspond à une marque dans [brand]
    function getInputBrand(e: ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value
        const arr = brand.filter(brand => brand.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase())
        if (arr.length > 0) {
            brandData(arr[0].id, arr[0].name)
            unChecked()
        }
    }

    //Retire le checked sur l'input si la marque est choisi par la barre de recherche
    function unChecked() {
        const inputChecked = document.querySelector("input:checked") as HTMLInputElement
        if (inputChecked) {
            inputChecked.checked = false
        }
    }

    function next(e: MouseEvent) {
        e.preventDefault()
        nextStep()
    }

    useEffect(() => {
        apiService.get()
            .then((data) => setBrand(data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        newArr(brand, brandLogoArr)
    }, [brand])

    return (
        <div>
            <Header headerArr={headerArr} prevStep={prevStep}/>
            <main>
                <form id={"searchRegistration"} className={"bg-light-gray p-5 border-r-5 d-flex"}>
                    <img src={searchBold} alt="search flitter"/>
                    <input className={"font-weight-700 border-none bg-transparent ml-5 outline-none"} type="text"
                           placeholder={"Rechercher par immatriculation"}/>
                </form>
                <Title title={"Votre voiture"}/>
                <form className={"border-r-10 d-flex border-input px-20 py-15"}>
                    <img src={search} alt="Filter models"/>
                    <input className={"border-none ml-10 font-size-18 color-gray outline-none"} type="text"
                           placeholder={"Marque ou modèle"} list={"data-list-brand"} onChange={getInputBrand}/>
                </form>
                <datalist id={"data-list-brand"}>
                    {brand && brand.map((b) => <option key={b.id} value={b.name}/>)}
                </datalist>
                <p className={"color-gray font-size-14 mt-10"}>Cliquez sur le logo de votre marque ou tapez la dans la
                    barre de recherche.</p>
                <div id={"logoList"} className={`mt-55 d-flex ${brand.length === 0 ? "justify-content-center" : ""}`}>
                    {brand.length === 0 &&
                        <div>
                            <Loader type={"TailSpin"} color="#24376f" height={80} width={80}/>
                        </div>
                    }
                    {brandLogoResult && brandLogoResult.map((brand) =>
                        <div key={brand.id} className={"card-logo mr-10 mb-10"}>
                            <input type="radio" id={brand.name} name={"carLogo"}
                                   value={brand.name} onChange={() => brandData(brand.id, brand.name)}/>
                            <label htmlFor={brand.name}
                                   className={"color-light-black font-size-18 border-r-10 d-flex justify-content-center align-items-center"}>
                                <img src={brand.src} alt={brand.alt}/>
                            </label>
                        </div>
                    )}
                </div>
                {data && <button onClick={next}
                                 className={"nextButton bg-red border-r-10 font-weight-700 color-white border-none font-size-16 mt-30 pointer"}>
                    Suivant
                </button>}
            </main>
        </div>
    );
};

export default Car;