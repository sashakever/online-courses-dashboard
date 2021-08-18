import React from 'react';
import { motion } from 'framer-motion';

import { useLocation, Link, useHistory} from "react-router-dom";

import { connect } from 'react-redux';
import { setDefaultUser } from '../../actions'

import './side-menu.scss';


const SideMenu = ({ user, onDefaultUser}) => {//fill    

    const splitLocation  = useLocation().pathname.split("/");
    
    let clazzHome = 'bi bi-house-door';
    let clazzCourse = "bi bi-x-diamond";
    let clazzUser = "bi bi-person";
    let clazzNotification = "bi bi-envelope";
    let clazzSettings = "bi bi-gear";
    switch (splitLocation[1]) {        
        case 'course': clazzCourse += '-fill';
            break;
        case 'user': clazzUser += '-fill';
            break;
        case 'notification': clazzNotification += '-fill';
            break;
        case 'settings': clazzSettings += '-fill';
            break;
        case '': clazzHome += '-fill';
            break;
        default: clazzHome += '-fill';
    }
    let userButton = '';
    if (user.login === 'guest') {
        userButton = (<i className="bi bi-box-arrow-in-right"></i>);
    } else {
        userButton = (<i className="bi bi-door-open"></i>);
    }
    let history = useHistory();

    const container = {
        visible: {
            opasity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        },
        hidden: {
            opasity: 1,
            scale: 0
        },
    }

    const itemList = {
        hidden: {
            y: 200,
            opacity: 0.1,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    } 

    return (
        <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            className="side-menu">
            <div className="side-menu__logo">F.</div>
            <ul className="side-menu__items">
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}                    
                    className="side-menu__item">
                    <Link to='/'>
                        <motion.i variants={itemList} className={clazzHome} />
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                    variants={itemList}
                    className="side-menu__item">
                    <Link to="/course">
                        <motion.i variants={itemList} className={clazzCourse} />
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                    variants={itemList}
                    className="side-menu__item">
                    <Link to="/user">
                        <motion.i variants={itemList} className={clazzUser}/>
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                    variants={itemList}
                    className="side-menu__item">
                    <Link to="/notification">
                        <motion.i variants={itemList} className={clazzNotification} />
                    </Link>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.8 }}
                    variants={itemList}
                    className="side-menu__item">
                    <Link to="/settings">
                        <motion.i variants={itemList} className={clazzSettings} />
                    </Link>
                </motion.li>
            </ul>
            <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
                variants={itemList}
                className="side-menu__logout"
                onClick={() => {
                    if (user.login === 'guest') {
                        history.push('/user');
                    } else {
                        onDefaultUser();
                    }
                }}>
                {userButton}
            </motion.div>
        </motion.div>
    );
};

const mapStateToProps = ({ userState: { user } }) => {
    return { user };
}

const mapDispatchToProps = {
    onDefaultUser: setDefaultUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);