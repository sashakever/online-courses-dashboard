import React from "react";

import './button-text.scss'

const ButtonText = ({ title, isActive=true, onEvent }) => {

    const clazz = isActive ? "button-text button-text_active" : "button-text button-text_disable";

    return (
        <button onClick={onEvent} className={clazz}>{ title }</button>
    );
}

export default ButtonText;