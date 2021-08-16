import React, { useEffect } from 'react';

import { useLocation, Link, useHistory} from "react-router-dom";

import { connect } from 'react-redux';
import { setDefaultUser } from '../../actions'

import './side-menu.scss';


const SideMenu = ({ user, onDefaultUser}) => {//fill


    const splitLocation  = useLocation().pathname.split("/");
    //console.log(splitLocation);
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
    return (
        <div className="side-menu">
            <div className="side-menu__logo">F.</div>
            <ul className="side-menu__items">
                <li className="side-menu__item">
                    <Link to='/'>
                        <i className={clazzHome} />
                    </Link>
                </li>
                <li className="side-menu__item">
                    <Link to="/course">
                        <i className={clazzCourse} />
                    </Link>
                </li>
                <li className="side-menu__item">
                    <Link to="/user">
                        <i className={clazzUser}/>
                    </Link>
                </li>
                <li className="side-menu__item">
                    <Link to="/notification">
                        <i className={clazzNotification} />
                    </Link>
                </li>
                <li className="side-menu__item">
                    <Link to="/settings">
                        <i className={clazzSettings} />
                    </Link>
                </li>
            </ul>
            <div className="side-menu__logout"
                onClick={() => {
                    if (user.login === 'guest') {
                        history.push('/user');
                    } else {
                        onDefaultUser();
                    }
                }}>
                {userButton}
            </div>
        </div>
    );
};

const mapStateToProps = ({ userState: { user } }) => {
    return { user };
}

const mapDispatchToProps = {
    onDefaultUser: setDefaultUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);