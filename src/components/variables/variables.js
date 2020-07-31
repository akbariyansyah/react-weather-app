import React from 'react'
import clear from '../../assets/sun-weather.gif'
import cloudy from '../../assets/cloudy-weather.gif'
import light_rain from '../../assets/rain-cloud-weather.gif'
import rain from '../../assets/rainy-weather.gif'
import haze from '../../assets/haze-weather.gif'
import thunderstorm from '../../assets/stormy-weather.gif'
import snow from '../../assets/light-snowy-weather.gif'
const getFullDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ["December", "January", "February", "March", "April", "June", "July", "August", "September", "October", "November"]
    var d = new Date();
    var dayName = days[d.getDay()];
    var monthName = month[d.getMonth()]
    var date = d.getDate()
    var fullDate = dayName + "," + date + " " + monthName
    return fullDate
}
const getWeathericon = props => {
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
    return weather

}
export { getFullDate,getWeathericon }