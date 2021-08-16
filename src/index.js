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

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
