import React from "react";
import Title from "../title";
import ButtonText from "../button-text";

import './statistics.scss'
//import chart from '../../img/chart.png';

const Statistics = () => {

    return (
        <div className="statistics">
            <div className="statistics__cols">
                <div className="statistics__col">
                    <div>
                        <span>11</span>
                        <p>Courses<br />completed</p>
                    </div>
                </div>
                <div className="statistics__col">
                    <div>
                        <span>4</span>
                        <p>Courses<br />in progress</p>
                    </div>
                </div>
            </div>
            <div className="statistics__title">
                <Title title='Your statistics'/>
            </div>
            <div className="statistics__buttons">
                <ButtonText title="Learning Hours" />
                <ButtonText title="My Courses" isActive={false} />
            </div>
            <img src={require('../../source/img/chart.png').default} alt='chart'/>
        </div>
    );
}

export default Statistics;