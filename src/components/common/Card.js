import React from 'react'
import '../../App.css'
import rain_cloud_weather_2 from '../../assets/sun-weather.gif'
import temperature from '../../assets/temperature-weather.gif'
import wind from '../../assets/windy-weather.gif'
import map from '../../assets/map-marker.gif'
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
            <h1 className="display-4 header">
                <img style={{height:70,paddingRight:10}} src={map}></img>
                {props.city},
                {props.country}
                </h1>
            <img style={{ height: 250, marginLeft: "16%" }} src={rain_cloud_weather_2}></img>
            <p className="desc">{props.desc}</p>
            <p className="day">{dayName}</p>

            <table className="info">
                <tr>
                    <td rowSpan="2">
                        <img style={{ height: 50 }} src={wind}></img>
                        <p style={{ paddingTop: 20 }}>{props.wind} m/s</p>
                    </td>
                    <td rowSpan="2">
                        <h2 className="display-4"><img style={{ height: 70 }} src={temperature}></img>{conventTemp(props.temp)}&deg; C</h2>

                    </td>
                    <td> <h3>
                        {conventTemp(props.tempMax)}&deg; C 
                        </h3>
                        </td>
                </tr>
                <tr>
                    <td>
                

                        <h3>  
                        {conventTemp(props.tempMin)}&deg; C</h3>
                        </td>
                </tr>
            </table>

        </div>
    )
}
