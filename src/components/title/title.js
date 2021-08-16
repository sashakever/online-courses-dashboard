import React from "react";

import './title.scss'

const Title = ({ title, isBig=true }) => {

    const clazz = isBig ? "title-big" : "title-small";

    return (
        <h2 className={clazz}>{ title }</h2>
    );
}

export default Title;