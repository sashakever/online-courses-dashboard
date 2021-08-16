import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HomePage, CoursePage, UserPage, NotificationPage, SettingsPage } from '../pages';
import SideMenu from '../side-menu';

import './app.scss'

const App = () => {
    return (
        <div className="app__wrapper">
            <div className="app__header"></div>    
            <div className="app__sidebar">
                <SideMenu/>
            </div>
            <div className="app__body">
                <Switch>                    
                    <Route
                        path="/course"
                        component={CoursePage}                            
                    />
                    <Route
                        path="/user"
                        component={UserPage}                            
                    />
                    <Route
                        path="/notification"
                        component={NotificationPage}                            
                    />
                    <Route
                        path="/settings"
                        component={SettingsPage}                            
                    />
                    <Route
                        path="/"
                        component={HomePage}
                        exact
                    />
                    <Redirect to="/" />
                </Switch>
            </div>            
        </div>
    );
}

export default App;