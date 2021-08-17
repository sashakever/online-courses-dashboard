import React from "react";
import { motion } from 'framer-motion';

import './button.scss'

const Button = ({ title, isWhite }) => {

    const clazz = isWhite ? "buttun-white" : "buttun-black";

    return (
        <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{scale: 0.85}}
            className={clazz}
        >
            {title}
        </motion.button>
    );
}

export default Button;