import React from 'react'
import Card from '../common/Card'
import Modal from './Modal'
import { loadByZip } from '../../services/WeatherApi'

export default function WeatherByZip(props) {
    const getData = (city_zip, country, app_key) => {
        loadByZip(city_zip, country, app_key).then(res => props.load(res))
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
            <h2>get weather by zip</h2>
            <select id="lang" onChange={props.onChangeCountry} value={props.country}>
                <option value="" selected>Select Country</option>
                <option value="uk">UK</option>
                <option value="us">USA</option>
                <option value="CN">China</option>
                <option value="ID">Indonesia</option>
            </select>
            <input type="text" name="city_zip" onChange={props.onChange} placeholder="Enter city's zip"></input>

            <button data-toggle="modal" data-target="#exampleModal" onClick={() => getData(props.city_zip, props.country, props.app_key)}>get weather</button>

            <Modal card={card} />
        </div>
    )
}


