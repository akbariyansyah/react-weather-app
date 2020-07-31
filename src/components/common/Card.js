import React from 'react'
import '../../App.css'
import clear from '../../assets/sun-weather.gif'
import cloudy from '../../assets/cloudy-weather.gif'
import light_rain from '../../assets/rain-cloud-weather.gif'
import rain from '../../assets/rainy-weather.gif'
import haze from '../../assets/haze-weather.gif'
import thunderstorm from '../../assets/stormy-weather.gif'
import snow from '../../assets/light-snowy-weather.gif'
import temperature from '../../assets/temperature-weather.gif'
import wind from '../../assets/windy-weather.gif'
import map from '../../assets/map-marker.gif'
import { getFullDate } from '../variables/variables'
export default function Card(props) {


    const conventTemp = temp => {
        let cel = Math.floor(temp - 273)
        return cel
    }
    let weather
    if (props.icon === "01d" || props.icon === "01n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={clear}></img>
    } else if (props.icon === "02d" || props.icon === "02n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={cloudy}></img>
    } else if (props.icon === "03d" || props.icon === "03n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={cloudy}></img>
    } else if (props.icon === "04d" || props.icon === "04n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={cloudy}></img>
    } else if (props.icon === "09d" || props.icon === "09n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={light_rain}></img>
    } else if (props.icon === "10d" || props.icon === "10n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={rain}></img>
    } else if (props.icon === "11d" || props.icon === "11n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={thunderstorm}></img>
    } else if (props.icon === "13d" || props.icon === "13n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={snow}></img>
    } else if (props.icon === "50d" || props.icon === "50n") {
        weather = <img style={{ height: 250, marginLeft: "16%" }} src={haze}></img>
    }

    const fullDate = getFullDate()
    return (
        <div className="display-card">
            <h1 className="display-4 header">
                <img style={{ height: 70, paddingRight: 10 }} src={map}></img>
                {props.city},
                {props.country}
            </h1>
            {weather}
            <p className="desc">{props.desc}</p>
            <p className="day">{fullDate}</p>

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
