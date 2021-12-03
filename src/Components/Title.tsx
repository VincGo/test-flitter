import React from 'react';

type TitleProps = {title: string}

const Title = ({title}: TitleProps) => {
    return (
        <h1 className={"color-light-black"}>{title}</h1>
    );
};

export default Title;