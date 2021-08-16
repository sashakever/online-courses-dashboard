import React from 'react';

const {
    Provider: CoursesServiceProvider,
    Consumer: CoursesServiceConsumer
} = React.createContext();

export {
    CoursesServiceProvider,
    CoursesServiceConsumer
};
