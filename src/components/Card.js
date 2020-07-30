import React, { useState } from 'react'
import '../App.css'
import CountUp from 'countup';
import rain_cloud_weather_2 from '../assets/rain-cloud-weather-2.gif'
export default function Card(props) {
    var today = new Date();

    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var dateTime = date + ' ' + time;
    const conventTemp = temp => {
        let cel = Math.floor(temp - 273)
        return cel
    }
    return (
        <div className="card">
            {/* <CountUp end={30} duration={3}/> */}
            <h1>{props.city}</h1>
            <h2>{conventTemp(props.temp)}&deg;
            
            </h2>
            <h2>{conventTemp(props.tempMax)}&deg;</h2>
            <h2>{conventTemp(props.tempMin)}&deg;</h2>
            <h2>{props.desc}</h2>
            <img src={rain_cloud_weather_2 }></img>
            <p>{dateTime}</p>
        </div>
    )
}
