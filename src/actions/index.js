import {typesCourses, typesCoursesByUser, typesUser, typesPages} from './types-for-actions';

//COURSES=============
const coursesRequested = () => {
    return {
        type: typesCourses.fetch_courses_req,//'FETCH_COURSES_REQUEST'
    }
};

const coursesLoaded = (newCourse) => {
    return {
        type: typesCourses.fetch_courses_suc,//'FETCH_COURSES_SUCCESS',
        payload: newCourse
    };
};

const coursesError = (error) => {
    return {
        type: typesCourses.fetch_courses_fail,//'FETCH_COURSES_FAILURE',
        payload: error
    };
};

const fetchCourses = (coursesService, dispatch) => () => {
    dispatch(coursesRequested());
    coursesService.getCourses()
    .then((dataCourses) => dispatch(coursesLoaded(dataCourses)))
    .catch((err) => dispatch(coursesError(err)));
};

const sortByDate = () => {
    return {
        type: typesCourses.sort_by_date,        
    }
}

const sortByTop = () => {
    return {
        type: typesCourses.sort_by_top
    }
}

const sortByRating = () => {
    return {
        type: typesCourses.sort_by_rating
    }
}

const allCourses = () => {
    return {
        type: typesCourses.all_courses
    }
}
//COURSES_BY_USER=============
const coursesRequestedByUser = () => {
    return {
        type: typesCoursesByUser.fetch_courses_user_req,//'FETCH_COURSES_REQUEST'
    }
};

const coursesLoadedByUser = (newCourse) => {
    return {
        type: typesCoursesByUser.fetch_courses_user_suc,//'FETCH_COURSES_SUCCESS',
        payload: newCourse
    };
};

const coursesErrorByUser = (error) => {
    return {
        type: typesCoursesByUser.fetch_courses_user_fail,//'FETCH_COURSES_FAILURE',
        payload: error
    };
};

const fetchCoursesByUser = (coursesService, dispatch, user) => {
    dispatch(coursesRequestedByUser());
    coursesService.getCoursesByUser(user)
    .then((dataCourses) => dispatch(coursesLoadedByUser(dataCourses)))
    .catch((err) => dispatch(coursesErrorByUser(err)));
};
//USER==========================
const userRequested = () => {
    return {
        type: typesUser.fetch_user_req,//'FETCH_COURSES_REQUEST'
    }
};

const setDefaultUser = () => {
    return {
        type: typesUser.set_default_user,//'FETCH_COURSES_REQUEST'
    }
};

const userLoaded = (newUser) => {
    return {
        type: typesUser.fetch_user_suc,//'FETCH_COURSES_SUCCESS',
        payload: newUser
    };
};

const userError = (error) => {
    return {
        type: typesUser.fetch_user_fail,//'FETCH_COURSES_FAILURE',
        payload: error
    };
};

const fetchUser = (coursesService, dispatch, user) => {
 // console.log('fetchUser');
    dispatch(userRequested());
    coursesService.getUser(user)
    .then((dataUser) => dispatch(userLoaded(dataUser)))
    .catch((err) => dispatch(userError(err)));
};

const setCurentPage = (pageLabel) => {
    return {
        type: typesPages.set_current_page,
        payload: pageLabel
    }
};

export {
    //COURSES
    fetchCourses,
    sortByDate,
    sortByTop,
    sortByRating,
    allCourses,
    //COURSES_BY_USER
    fetchCoursesByUser,
    //USER
    fetchUser,
    setDefaultUser,
    setCurentPage,
};