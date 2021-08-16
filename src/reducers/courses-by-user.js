import {typesCoursesByUser} from '../actions/types-for-actions';

const updateCourseByUser = (state, action) => {

    if (state === undefined) {
        return {
            courses: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case typesCoursesByUser.fetch_courses_user_req://'FETCH_COURSES_REQUEST':
        return {
            courses: [],
            loading: true,
            error: null
        };

        case typesCoursesByUser.fetch_courses_user_suc://'FETCH_COURSES_SUCCESS':
        return {
            courses: action.payload,
            loading: false,
            error: null
        };

        case typesCoursesByUser.fetch_courses_user_fail://'FETCH_COURSES_FAILURE':
        return {
            courses: [],
            loading: false,
            error: action.payload
        };

        default:
        return state.coursesByUser;
    }
};

export default updateCourseByUser;