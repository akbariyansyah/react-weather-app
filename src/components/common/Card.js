import React from 'react'
import '../../App.css'
import CountUp from 'countup';
import rain_cloud_weather_2 from '../../assets/sun-weather.gif'
import wind from '../../assets/windy-weather.gif'
export default function Card(props) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];

    const conventTemp = temp => {
        let cel = Math.floor(temp - 273)
        return cel
    }
    return (
        <div className="display-card">
            <h1 className="display-4 header">{props.city},{props.country}</h1>
            <img style={{ height: 250, marginLeft: "16%" }} src={rain_cloud_weather_2}></img>
            <p className="desc">{props.desc}</p>
            <p className="day">{dayName}</p>
            <div style={{ float: "left", backgroundColor: "yellow" }}>
                <h2>{conventTemp(props.temp)}&deg; C</h2>
            </div>
            <img style={{height: 50}} src={wind}></img>
            <div style={{ float: "right", backgroundColor: "blue" }}>
                <h2>max {conventTemp(props.tempMax)}&deg; C </h2>
                <h2>min {conventTemp(props.tempMin)}&deg; C</h2>
            </div>

        </div>
    )
}
