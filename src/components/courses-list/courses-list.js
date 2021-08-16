import React, {Component} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ButtonText from "../button-text";
import CourseItem from "../course-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { withCourseService } from '../hoc';
import { fetchCourses, sortByDate, sortByTop, sortByRating } from '../../actions';

import './courses-list.scss';

const CoursesList = ({ courses, searchText="", sorted, onSortedBy, onViewCourse}) => {
    
    let filteredCourses;
    if (searchText !== "" && searchText !== null) {
        filteredCourses = courses.filter((item) => {
            return item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });
    } else filteredCourses = courses;

    return (
        <div className="courses-list">
            <div className="courses-list__buttons">
                <ButtonText title="All Courses"
                    isActive={sorted ==='all' ? true : false}
                    onEvent={() => onSortedBy('all')}/>
                <ButtonText title="The Newest"
                    isActive={sorted ==='created' ? true : false}
                    onEvent={() => onSortedBy('created')} />
                <ButtonText title="Top Rated"
                    isActive={sorted === 'top' ? true : false}
                    onEvent={() => onSortedBy('top')} />
                <ButtonText title="Most Popular"
                    isActive={sorted ==='rating' ? true : false}
                    onEvent={() => onSortedBy('rating')} />
            </div>
            <ul className="courses-list__items">
                {                    
                filteredCourses.map((course) => {
                    return (
                        <li key={course.id}>
                            <CourseItem course={course}
                                onViewCourse={() => onViewCourse(course.id) }/>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    );
}

class CoursesListContainer extends Component {

    componentDidMount() {        
        this.props.fetchCourses();        
    }

    onSortedBy = (sortedBy) => {
        
        switch (sortedBy) {
            case 'created':
                this.props.onSortByDate();
                break;
            case 'top':
                this.props.onSortByTop();
                break;
            case 'rating':
                this.props.onSortByRating();
                break;
            default:
                this.props.fetchCourses();  
        }
    }

    render() {
        const { courses, loading, error,
            searchText, onViewCourse, sorted} = this.props;
        if (loading) return <Spinner />

        if (error) return <ErrorIndicator error={error} />
        
        return <CoursesList
            sorted={sorted}
            onSortedBy={this.onSortedBy}
            searchText={searchText}
            courses={courses}
            onViewCourse={onViewCourse} />
    }
}

CoursesListContainer.defaultProps = {
    onViewCourse: () => {}
};

CoursesListContainer.propTypes = {
    onViewCourse: PropTypes.func,
    courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ coursesList: { courses, loading, error, sorted }, userState: { user } }) => {
    
    return { courses, loading, error, user, sorted };
}

const mapDispatchToProps = (dispatch, { coursesService }) => {
    return {
        fetchCourses: fetchCourses(coursesService, dispatch),
        onSortByDate: () => dispatch(sortByDate()),
        onSortByTop: () =>  dispatch(sortByTop()),
        onSortByRating: () =>  dispatch(sortByRating()),
    }
}

export default //compose(
    withCourseService()(connect(mapStateToProps, mapDispatchToProps)
(CoursesListContainer));
    