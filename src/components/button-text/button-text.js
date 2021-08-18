import React from "react";
import { motion } from 'framer-motion';

import './button-text.scss'

const ButtonText = ({ title, isActive=true, onEvent }) => {

    const clazz = isActive ? "button-text button-text_active" : "button-text button-text_disable";

    const buttonVariants = {
        hover: {
            scale: 1.1,
            textShadow: "0px 0px 5px rgb(200,200,200)",
            transition: {
                yoyo: Infinity
            }
        }
    }

    return (
        <motion.button
            onClick={onEvent}
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{
                scale: 0.9
            }}
            className={clazz}>
            {title}
        </motion.button>
    );
}

export default ButtonText;