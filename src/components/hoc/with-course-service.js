import React from 'react';
import { CoursesServiceConsumer } from '../courses-service-context';

const withCoursesService = () => (Wrapped) => {

    return (props) => {        
        return (
            <CoursesServiceConsumer>
            {
                (coursesService) => {
                    return (<Wrapped {...props}
                        coursesService={coursesService}/>);
                }
            }
            </CoursesServiceConsumer>
    );
    }
};

export default withCoursesService;