import React from 'react';
import Title from '../title';
import './error-indicator.scss';

const ErrorIndicator = ({error}) => {
    return (
        <Title title={error.message}/>        
    );
};

export default ErrorIndicator;