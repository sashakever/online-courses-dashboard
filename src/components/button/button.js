import React from "react";
import { motion } from 'framer-motion';

import './button.scss'

const Button = ({ title, isWhite }) => {

    const clazz = isWhite ? "buttun-white" : "buttun-black";

    const buttonVariants = {
        hover: {
            scale: 1.1,
            textShadow: isWhite ? "0px 0px 5px rgb(200,200,200)" : "0px 0px 5px rgb(255,255,255)",
            boxShadow: "0px 0px 5px rgb(0,0,0)",
            transition: {
                yoyo: Infinity
            }
        },
        tap: {
            scale: 0.9
        }
    }

    return (
        <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className={clazz}
        >
            {title}
        </motion.button>
    );
}

export default Button;