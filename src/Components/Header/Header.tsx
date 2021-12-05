import React, {MouseEvent} from 'react';
import './header.scss';
import logo from "../../Assets/img/logo_flitter.svg";
import arrowLeft from "../../Assets/img/arrow_left.svg";

type HeaderProps = {
    headerArr: string[]
    prevStep: any
}

const Header = ({headerArr, prevStep}: HeaderProps) => {

    function prev (e: MouseEvent) {
        e.preventDefault()
        prevStep()
    }

    return (
        <nav className={"d-grid grid-template-c-3 shadow-sm pt-15 pb-25"}>
            <div className={"d-flex justify-content-center pointer"} onClick={prev}>
                <img id={"arrowLeft"} src={arrowLeft} alt="back"/>
                <p className={"font-weight-700 color-light-black ml-10"}> Retour</p>
            </div>
            <section className={"d-grid grid-c-2 grid-template-c-3 grid-gap-15"}>
                {headerArr.map((h, index) =>
                    <div key={index} >
                        <p className={"text-center mb-5"}>{h}</p>
                        <div className={"progress-bar bg-light-gray"}>
                            <div/>
                        </div>
                    </div>
                )}
            </section>
            <img src={logo} alt="Flitter" className={"place-self-center"}/>
        </nav>
    );
};

export default Header;