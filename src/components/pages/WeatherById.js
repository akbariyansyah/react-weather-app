import React from 'react'
import Card from  '../common/Card'
import Modal from './Modal'
import { loadById } from '../../services/WeatherApi'
export default function WeatherById(props) {
    const getData = (city_id, app_key) => {
        loadById(city_id, app_key).then(res => props.load(res))
    }
    let card
    if (props.show) {
        card = <Card
        key={new Date()}
        city={props.display.cityName}
        country={props.display.countryName}
        temp={props.display.temp}
        tempMax={props.display.tempMax}
        tempMin={props.display.tempMin}
        wind={props.display.wind}
        desc={props.display.desc}
        icon={props.display.icon}
    />
    }
    return (
        <div>
            <h2>get weather by id</h2>
            <input type="number" name="city_id" onChange={props.onChange} placeholder="Enter city's id"></input>
            <button data-toggle="modal" data-target="#exampleModal" onClick={() => getData(props.city_id, props.app_key)}>get weather</button>
            <Modal card={card} />
        </div>
    )
}
