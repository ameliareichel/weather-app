import React from "react";
import DetailedWeather from "./DetailedWeather";
import './WeatherWindow.css';

const WeatherWindow = () => {
    return (
        <div className="main-weather-window">
            <div className="weather-window">
                <div className="weather-window-content">
                    <div className="general-info">
                        <div className="localization-info">
                            <span>&#8962;</span>
                            <p className="location-name">Warsaw</p>
                        </div>
                        <div className="lines">
                            <div className="linebreak"></div>
                            <div className="linebreak"></div>
                        </div>
                    </div>
                    <div className="main-temperature">
                        <p>0°</p>
                        <img src="../images/humidity-icon.png" alt="" />
                        <p className="humidity-level">60%</p>
                    </div>
                </div>
                <DetailedWeather />
            </div>
        </div>
    );
};

export default WeatherWindow;