
const typesCourses = {
    fetch_courses_req: 'FETCH_COURSES_REQUEST',
    fetch_courses_suc: 'FETCH_COURSES_SUCCESS',
    fetch_courses_fail: 'FETCH_COURSES_FAILURE',
    sort_by_date: 'SORT_BY_DATE',
    sort_by_top: 'SORT_BY_TOP',
    sort_by_rating: 'SORT_BY_RATING',
    all_courses: 'ALL_COURSES',
};

const typesCoursesByUser = {
    fetch_courses_user_req: 'FETCH_COURSES_USER_REQUEST',
    fetch_courses_user_suc: 'FETCH_COURSES_USER_SUCCESS',
    fetch_courses_user_fail: 'FETCH_COURSES_USER_FAILURE',
};

const typesUser = {
    fetch_user_req: 'FETCH_USER_REQUEST',
    fetch_user_suc: 'FETCH_USER_SUCCESS',
    fetch_user_fail: 'FETCH_USER_FAILURE',
    set_default_user: 'SET_DEFAULT_USER'
};

const typesPages = {
    set_current_page: 'SET_CURRENT_PAGE',
}

export {
    typesCourses,
    typesCoursesByUser,
    typesUser,
    typesPages,
};
