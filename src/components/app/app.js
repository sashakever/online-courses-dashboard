import React from 'react';
import { Route, Switch, Redirect,useLocation } from 'react-router-dom';

import { HomePage, CoursePage, UserPage, NotificationPage, SettingsPage } from '../pages';
import SideMenu from '../side-menu';
import { AnimatePresence } from 'framer-motion';

import './app.scss'

const App = () => {
    const location = useLocation();
    return (
        <div className="app__wrapper">
            <div className="app__header"></div>    
            <div className="app__sidebar">
                <SideMenu/>
            </div>
            <div className="app__body">
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.key}>                    
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
                </AnimatePresence>
            </div>            
        </div>
    );
}

export default App;