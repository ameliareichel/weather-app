import React from "react";
import './DetailedWeather.css';

const DetailedWeather = () => {
    return (
        <div className="detailed-weather">
            <div className="linebreak"></div>
            <div className="weather-icons">
                <div className="weather-detail">
                    <img className="weather-icon" src="../images/full-sun-icon.png" alt="" />
                    <p>morning</p>
                    <span className="temperature-detail">-3°</span>
                </div>
                <div className="weather-detail">
                    <img className="weather-icon" src="../images/sun-cloud-icon.png" alt="" />
                    <p>noon</p>
                    <span className="temperature-detail">0°</span>
                </div>
                <div className="weather-detail">
                    <img className="weather-icon" src="../images/cloud-rain-icon.png" alt="" />
                    <p>afternoon</p>
                    <span className="temperature-detail">3°</span>
                </div>
                <div className="weather-detail">
                    <img className="weather-icon" src="../images/full-sun-icon.png" alt="" />
                    <p>night</p>
                    <span className="temperature-detail">-5°</span>
                </div>
            </div>
        </div>
    );
};

export default DetailedWeather;