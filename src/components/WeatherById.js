import React, { Component, useState } from 'react'
import Axios from 'axios'

export default function WeatherByName() {

    const [weather, setWeather] = useState({})
    const [key, setKey] = useState("165f80a4a96da8b814f1352ed82fd43a")
    const [id, setId] = useState("")


    const handleChange = e => {
        e.preventDefault()
        setId(e.target.value)
    }

    const get = () => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${key}`)
            .then(res => {
                setWeather(res)

            })

            .catch(err => console.log(err))


    }

    return (
        <div>
            <h2>get weather by id</h2>
            <input type="number" name="city" onChange={handleChange} placeholder="Enter city's id"></input>
            <button onClick={get}>get weather</button>

        </div>
    )
}
