import updateCourseList from './course-list';
import updateUser from './user';
import updatePages from './pages';
import updateCourseByUser from './courses-by-user';

const reducer = (state, action) => {
    return {
        coursesList: updateCourseList(state, action),
        coursesByUser: updateCourseByUser(state, action),
        userState: updateUser(state, action),
        pages: updatePages(state, action),        
    };
};

export default reducer;