import React, { Component, useState } from "react";
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { withCourseService } from '../hoc';
import { fetchCoursesByUser } from '../../actions';
import { motion } from 'framer-motion';

import './courses-slider.scss'
import 'swiper/swiper.scss';

import CourseItem from "../course-item";

SwiperCore.use([Navigation]);

const CoursesSlider = ({courses}) => {

    const [swiper, updateSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
        swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
        swiper.slidePrev();
        }
    };

    return (
        <div className="slider">            
            <div className="slider__items">                
                <Swiper
                    onSwiper={updateSwiper} modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop>
                        {
                        courses.map((course) => {
                            return (
                                <SwiperSlide key={course.id}>
                                    <CourseItem course={course} isCommon={false} />
                                </SwiperSlide>
                            );
                        })
                        }                                                            
                </Swiper>
                    
                </div>
                <div className="slider__buttons">
                    <motion.button
                        className="swiper-button-prev"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{scale: 0.85}}
                        onClick={goPrev}
                    >
                        <i className="bi bi-arrow-left-circle"></i>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{scale: 0.85}}
                        className="swiper-button-next"
                        onClick={goNext}
                    >
                        <i className="bi bi-arrow-right-circle"></i>
                    </motion.button>
                </div>
            </div>           
    );
};

class CoursesSliderContainer extends Component {

    componentDidMount() {
        this.props.fetchCoursesByUser(this.props.user)
    }

    render() {
        const { courses, loading, error } = this.props;
        console.log(courses);
        if (loading) return <Spinner />
        
        if (error) return <ErrorIndicator error={error} />
        return <CoursesSlider courses={courses} />
    }
}

const mapStateToProps = ({ coursesByUser: { courses, loading, error } }) => {
    return { courses, loading, error }
}

const mapDispatchToProps = ( dispatch, { coursesService }) => {
    return {
        fetchCoursesByUser: (user) => fetchCoursesByUser(coursesService, dispatch, user)
    }
}

export default withCourseService()( connect(mapStateToProps,mapDispatchToProps)(CoursesSliderContainer));