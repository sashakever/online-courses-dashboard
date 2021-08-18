import React, {useState} from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Title from '../title';
import Button from '../button';
import Statistics from '../statistics';
import CoursesSlider from '../courses-slider';
import CoursesList from '../courses-list';

import './home-page.scss';

const HomePage = ({ user }) => {

    const variantsRightCollogin = {
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.25, stiffness: 50,} }        
    }
    const variantsRightColStat = {
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: 0.50, stiffness: 50, } }        
    }
    const variantsRightColPremium = {
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', delay: user.login === 'guest' ? 0.5 : 0.75, stiffness: 50, } }        
    }  

    let welcome = '';
    let slider = '';
    let logInButton = '';
    let userBloc = '';
    let statistics = '';
    if (user.login === 'guest') {
        welcome = `Please log in to the site.`;
        logInButton = (<Link to="/user" ><Button title='Log In' isWhite={true} /></Link>);
    } else {
        welcome = `It’s good to see you again.`;
        slider = (
            <div className="home-page__my-courses">
                <CoursesSlider user={user} />
            </div>
        );
        userBloc = (
            <div className="home-page__login">
                <motion.div
                    initial={{ scale: 1, }}
                    animate={{ scale: [1, 1.4, 0.6, 1.4, 1] }}
                    transition={{
                        repeat: Infinity,
                        repeatDelay: 2,
                    }}
                    className="home-page__notification-number">
                    <span>2</span>
                </motion.div>
                <motion.i
                    whileHover={{ scale: 1.15 }}
                    whileTap={{scale: 0.85}}
                    className="bi bi-bell"></motion.i>
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 20,
                        mass: 2 
                    }}
                    src={require('../../source/img/avatar.png').default} alt='avatar' />
            </div>
        );
        statistics = (
            <motion.div
                variants={variantsRightColStat}
                initial="hidden"
                animate="visible"
                className="home-page__statistics">
                <Statistics user={user} />
            </motion.div>
        );
    }
    const [searchText, setSearchText] = useState(null);      

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
        exit: { y: '100vh', transition: { ease: 'easeInOut' } },
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial={false}
            exit="exit"
            className="home-page">
            <div className="home-page__left-col">
                <motion.div
                    initial={{ y: '-100vh', }}
                    animate={{ y: 0, }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 26,
                        mass: 1.4,
                    }}
                    className="home-page__hi-header">
                    <h1>Hello {user.name}!</h1>
                    <h3>{welcome}</h3>
                    <img src={require('../../source/img/hi.png').default} alt="hi" />
                </motion.div>
                {slider}
                <div className="home-page__courses-title">
                    <Title title='Courses' />
                </div>
                <div className="home-page__courses">
                    <CoursesList searchText={ searchText }/>
                </div>
            </div>
            <div className="home-page__right-col">
                <motion.div
                    variants={variantsRightCollogin}
                    initial="hidden"
                    animate="visible"
                    className="home-page__search-login">
                    <div className="home-page__search">
                        <i className="bi bi-search"></i>
                        <input type="text"
                            className="form-control search-input"
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="type to search"
                        />
                    </div>
                    {userBloc}
                    {logInButton}
                </motion.div>
                {statistics}
                <motion.div
                    variants={variantsRightColPremium}
                    initial="hidden"
                    animate="visible"
                    className="home-page__premium premium">
                    <div className="premium__cols">
                        <div className="premium__left">
                            <div className="premium__title">
                                <Title title="Learn even more!" />
                            </div>
                            <div className="premium__text">
                                Unlock premium features<br />only for $9.99 per month.
                            </div>
                            <div className="premium__button">                                
                                <Button
                                    title="Go Premium"
                                    isWhite={false}
                                />
                            </div>
                        </div>
                        <div className="premium__right">
                            <img src={require('../../source/img/premium.png').default} alt='premium' />
                        </div>
                    </div>
                </motion.div>                
            </div>
        </motion.div>
    );
};

const mapStateToProps = ({ userState: { user } }) => {
    return { user  };
};

export default connect(mapStateToProps)(HomePage);