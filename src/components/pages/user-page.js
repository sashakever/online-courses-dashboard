import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../button';
import { connect } from 'react-redux';
import ErrorIndicator from "../error-indicator";
import { withCourseService } from '../hoc';
import { fetchUser } from '../../actions';
import Spinner from "../spinner";
import Title from '../title/';

import './user-page.scss';

//const onSubmit = 

const UserPage = ({ user, loading, error, fetchUser }) => {
    const [login, setLogin] = useState(null);
    const [pass, setPass] = useState(null);
    let message;
    /*if (loading) {
        message = (<Spinner/>)
    }*/
    if (error) {
        message = (<ErrorIndicator error={error }/>)
    }
    const history = useHistory();
    if (!loading && !error)
        history.push('/');
    return (
        <div className="user-page">
            <div className="user-page__sign-in sign-in">
                
                <form className="sign-in__form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const userSignin = {
                            login: login ? login : "SuperUser",
                            password: pass ? pass : "React2021",
                        }
                        console.log(userSignin);
                        fetchUser(userSignin);
                    }}
                >
                    <Title title="Enter your user login and password"/>
                    <div className="sign-in__message">
                        { message }
                    </div>
                    <div className="sign-in__login">
                        <i className="bi bi-person-circle"/>
                        <input type="text"
                            className="sign-in__input"
                            placeholder="Enter your login [leave empty]"
                            onChange={(e) => {
                                setLogin(e.target.value);
                            }}
                            value={login}/>
                    </div>
                    <div className="sign-in__pass">
                        <i className="bi bi-check-circle"></i>
                        <input type="password"
                            className="sign-in__input"
                            placeholder="Enter your password [leave empty]"
                            onChange={(e) => {
                                setPass(e.target.value);
                            }}
                            value={pass} />
                    </div>
                    <div className="sign-in__button">
                        <Button title="Sign In" className="sign-in__button" isWhite/>
                    </div>
                </form>
            </div>
        </div>
    );
};

class UserPageContainer extends Component {
    
    componentDidMount() {
        //this
    }
}

const mapStateToProps = ({ userState: { user, loading, error } }) => {
    return {user, loading, error}
}

const mapDispatchToProps = (dispath, { coursesService }) => {
    return {
        fetchUser: (user) => fetchUser(coursesService, dispath, user)
    };
};

export default withCourseService()(connect( mapStateToProps, mapDispatchToProps)(UserPage));