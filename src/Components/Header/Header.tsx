import React from 'react';
import './header.scss';
import logo from "../../Assets/img/logo_flitter.svg";

type HeaderProps = {headerArr: string[]}

const Header = ({headerArr}: HeaderProps) => {
    return (
        <nav className={"d-grid grid-template-c-3 shadow-sm pt-15 pb-25"}>
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