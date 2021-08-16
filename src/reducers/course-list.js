import { typesCourses } from '../actions/types-for-actions';
import sortArray from 'sort-array';

//const sortArray = require('sort-array');

const updateCourseList = (state, action) => {

    if (state === undefined) {
        return {
            courses: [],
            sorted: 'all',
            loading: true,
            error: null
        };
    }

    const coursesArray = [...state.coursesList.courses]; //Array.from(state.coursesList.courses);
    //sortArray(coursesArray);
    //console.log(state.coursesList.courses);
    //console.log(coursesArray);

    switch (action.type) {
        case typesCourses.fetch_courses_req://'FETCH_COURSES_REQUEST':
        return {
            courses: [],
            sorted: 'all',
            loading: true,
            error: null
        };

        case typesCourses.fetch_courses_suc://'FETCH_COURSES_SUCCESS':
        return {
            courses: action.payload,
            sorted: 'all',
            loading: false,
            error: null
        };

        case typesCourses.fetch_courses_fail://'FETCH_COURSES_FAILURE':
        return {
            courses: [],
            sorted: 'all',
            loading: false,
            error: action.payload
        };
        case typesCourses.all_courses:
            return {};        
        case typesCourses.sort_by_date:
            //console.log(state.coursesList.courses);
            //console.log(coursesArray);    
            sortArray(coursesArray, {
                by: 'created',
                order: 'desc',
            })
            return {                
                courses: coursesArray,
                sorted: 'created',
                loading: false,
                error: null
            };
        case typesCourses.sort_by_top:
            sortArray(coursesArray, {
                by: 'top',
                order: 'desc',
            });
            return {
                courses: coursesArray,
                sorted: 'top',
                loading: false,
                error: null
            };
        case typesCourses.sort_by_rating:
            sortArray(coursesArray, {
                by: 'rating',
                order: 'desc',
            });
            return {
                courses: coursesArray,
                sorted: 'rating',
                loading: false,
                error: null
            };
        default:
        return state.coursesList;
    }
};

export default updateCourseList;