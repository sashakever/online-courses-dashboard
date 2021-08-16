import React from "react";

import './button.scss'

const Button = ({ title, isWhite }) => {

    const clazz = isWhite ? "buttun-white" : "buttun-black";

    return (
        <button
            className={clazz}
        >
            {title}
        </button>
    );
}

export default Button;