import React from 'react';
import Header from "../Components/Header/Header";

const Car = () => {
    const headerArr: string[] = ['voiture', 'infos', 'usage']

    return (
        <div>
            <Header headerArr={headerArr} />
        </div>
    );
};

export default Car;