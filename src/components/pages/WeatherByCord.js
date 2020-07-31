import React from 'react'
import Card from '../common/Card'
import { loadByCord } from '../../services/WeatherApi'
import Modal from './Modal'

export default function WeatherByCord(props) {
    const getData = (city, country, app_key) => {
        loadByCord(city, country, app_key).then(res => {
            console.log(res)
            props.load(res)
        })
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
        <h2>get weather by coordinates</h2>

        <input type="text" name="lat" onChange={props.onChange} placeholder="Enter city's latitude"></input>
        <input type="text" name="lon" onChange={props.onChange} placeholder="Enter city's longitude"></input>

        <button data-toggle="modal" data-target="#exampleModal" className="btn btn-success" onClick={() => getData(props.lat, props.lon, props.app_key)}>get weather</button>
        <Modal card={card}/>
    </div>
    )
}


