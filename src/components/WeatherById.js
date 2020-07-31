import React, { Component, useState } from 'react'
import Axios from 'axios'
import Card from './Card'
import { loadById } from '../services/WeatherApi'
export default function WeatherById(props) {
    console.log(props.city_id, props.app_key)
    const loadData = (city_id, app_key) => {
        loadById(city_id, app_key).then(res => props.load(res))


    }
    let card
    if (props.show) {
        card = <Card
            city={props.display.cityName}
            temp={props.display.temp}
            tempMax={props.display.tempMax}
            tempMin={props.display.tempMin}
            desc={props.display.desc}
            icon={props.display.icon}
        />
    }
    return (
        <div>
            <h2>get weather by id</h2>
            <input type="number" name="city_id" onChange={props.onChange} placeholder="Enter city's id"></input>
            <button onClick={() => loadData(props.city_id, props.app_key)}>get weather</button>
            {card}
        </div>
    )
}
