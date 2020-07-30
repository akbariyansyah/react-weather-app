import React, { Component, useState } from 'react'
import Axios from 'axios'
export default function WeatherByName() {

    const [weather, setWeather] = useState({})
    const [value, setValue] = useState({ value : ""})
    const [key,setKey] = useState("165f80a4a96da8b814f1352ed82fd43a")
    const [city,setCity] = useState("")
    const change = event => {
        setValue({ value: event.target.value });
    }
    const handleChange = e => {
        e.preventDefault()
        setCity(e.target.value)
    }
  
    const get = () => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${value.value}&APPID=${key}`)
            .then(res => {
                setWeather(res)
             
            })

            .catch(err => console.log(err))
            console.log(weather)
    }
 
    return (
        <div>
            <h2>get weather by name</h2>
        <select id="lang" onChange={change} value={value.value}>
            <option value="" selected>Select Country</option>
            <option value="uk">UK</option>
            <option value="us">USA</option>
            <option value="CN">China</option>
            <option value="ID">Indonesia</option>
        </select>
        <input type="text" name="city" onChange={handleChange} placeholder="Enter city's name"></input>
        <button onClick={get}>get weather</button>
    </div>
    )
}
