import React from 'react'
import Card from '../common/Card'
import { loadByCord } from '../../services/WeatherApi'
import Modal from './Modal'

export default function WeatherByCord(props) {
    const getData = (lat, lon, app_key) => {
        loadByCord(lat, lon, app_key).then(res => {
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
    let button;
    if (props.lat === "" || props.lon === "") {
        button = <button data-toggle="modal" className="btn btn-secondary">get weather</button>
    } else {
        button = <button data-toggle="modal" data-target="#exampleModal" className="btn btn-success" onClick={() => getData(props.lat, props.lon, props.app_key)}>get weather</button>
    }
    return (
        <div className="byCord">
            <p className="display-4">Get weather by Coordinates</p>
            <div class="input-group mb-3">
                <input type="text" name="lat" onChange={props.onChange} className="form-control" placeholder="Enter city's latitude"></input>
                <input type="text" name="lon" onChange={props.onChange} className="form-control" placeholder="Enter city's longitude"></input>
                {button}
            </div>
            <Modal card={card} />
        </div>
    )
}


