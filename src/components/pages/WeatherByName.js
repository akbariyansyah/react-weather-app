import React from 'react'
import Card from '../common/Card'
import { loadByName } from '../../services/WeatherApi'
import Modal from './Modal'

export default function WeatherByName(props) {
    const  getData = (city, country, app_key) => {
        loadByName(city, country, app_key).then(res => props.load(res))
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
        <h2>get weather by name</h2>
        <input type="text" name="city" onChange={props.onChange} placeholder="Enter city's name"></input>

        <button data-toggle="modal" data-target="#exampleModal" onClick={() => getData(props.city, props.country, props.app_key)}>get weather</button>

        <Modal card={card} />
       

    </div>
    )
}


