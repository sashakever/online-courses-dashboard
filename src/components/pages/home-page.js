import React, {useState} from 'react';
import { connect  } from 'react-redux';
import {  Link } from 'react-router-dom';

import Title from '../title';
import Button from '../button';
import Statistics from '../statistics';
import CoursesSlider from '../courses-slider';
import CoursesList from '../courses-list';

import './home-page.scss';

const HomePage = ({ user }) => {
    //console.log(pageLabel);
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
                <i className="bi bi-bell"></i>
                <img src='/img/avatar.png' alt='avatar' />
            </div>
        );
        statistics = (
            <div className="home-page__statistics">
                <Statistics user={user} />
            </div>
        );
    }
    const [searchText, setSearchText] = useState(null);
    return (
        <div className="home-page">
            <div className="home-page__left-col">
                <div className="home-page__hi-header">
                    <h1>Hello {user.name}!</h1>
                    <h3>{welcome}</h3>
                    <img src='/img/hi.png' alt="hi" />
                </div>
                {slider}
                <div className="home-page__courses-title">
                    <Title title='Courses' />
                </div>
                <div className="home-page__courses">
                    <CoursesList searchText={ searchText }/>
                </div>
            </div>
            <div className="home-page__right-col">
                <div className="home-page__search-login">
                    <div className="home-page__search">
                        <i className="bi bi-search"></i>
                        <input type="text"
                            className="form-control search-input"
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="type to search"
                        /*value={this.state.term}
                        onChange={this.onSearchChange}*/
                        />
                    </div>
                    {userBloc}
                    {logInButton}
                </div>
                {statistics}
                <div className="home-page__premium premium">
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
                                        //onEvent={() => {return }}
                                    //onCurrentPage={onCurentPage('home-page')}
                                    />
                            </div>
                        </div>
                        <div className="premium__right">
                            <img src='/img/premium.png' alt='premium' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ userState: { user } }) => {
    return { user  };
};

/*const mapStateToProps = (state) => {    
    return { state };
}*/

const mapDispatchToProps = {
    //onFilterByName: filterByName,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);