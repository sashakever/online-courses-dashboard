import React from "react";
import { motion } from 'framer-motion';

import './button-text.scss'

const ButtonText = ({ title, isActive=true, onEvent }) => {

    const clazz = isActive ? "button-text button-text_active" : "button-text button-text_disable";

    return (
        <motion.button
            onClick={onEvent}
            whileHover={{ scale: 1.15 }}
            whileTap={{scale: 0.85}}
            className={clazz}>
            {title}
        </motion.button>
    );
}

export default ButtonText;