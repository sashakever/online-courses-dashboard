import React, {Fragment} from "react";
import Button from "../button";
import Title from "../title";

import './course-item.scss';

const CourseItem = ({ course, isCommon = true, onAction}) => {

    const commonBlock = (
        <Fragment>
            <div className="course-item__img">
                <img src={course.coverImage} alt='icon'/> 
            </div>
            <div className="course-item__description">
                <div className="course-item__title">
                    <Title title={course.title} isBig={false}/>
                </div>
                <span>{course.author}</span>
            </div>
        </Fragment>);
    
    const commonCourse = (
        <Fragment>
            <div className="course-item__time">
                <i className="bi bi-clock"></i>
                <span>{ course.duration }</span>
            </div>            
            <div className="course-item__rating">
                <i className="bi bi-stars"></i>
                <span>{ course.rating }</span>
            </div>
            <div className="course-item__button">
                <Button
                    title="View course"
                    isWhite
                    onViewCourse={onAction}
                />
            </div>
        </Fragment>
    );
    const userCourse = (
        <Fragment>
            <div className="course-item__progress">{ course.progress }</div>
            <div className="course-item__button">
                <Button title="Continue" isWhite={false}/>
            </div>
        </Fragment>
    );
    return (
        <div className="course-item">
            {commonBlock}
            {isCommon ? commonCourse : userCourse}
        </div>
    );
};

export default CourseItem;