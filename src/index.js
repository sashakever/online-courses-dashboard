import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import CoursesService from './services/courses-service';
import { CoursesServiceProvider } from './components/courses-service-context/';

import './scss/index.scss';

import store from './store';

const coursesService = new CoursesService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CoursesServiceProvider value={coursesService}>
        <Router>
          <App />
        </Router>
      </CoursesServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);