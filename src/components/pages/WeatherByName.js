import React from 'react'
import Card from '../common/Card'
import { loadByName } from '../../services/WeatherApi'
import Modal from '../common/Modal'
import swal from 'sweetalert'
export default function WeatherByName(props) {
    const getData = (city, country, app_key) => {
        loadByName(city, country, app_key).then(res => {
            if (res !== undefined) {
                props.load(res)
            } else {
                swal("Oops...!", "City not found!", "error");
            }
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
    let button
    if (props.city === "") {
        button =  <button className="btn btn-secondary" disabled>get weather</button>
    } else {
        button = <button className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => getData(props.city, props.country, props.app_key)}>get weather</button>
    }
    return (
        <div className="byName">
            <p className="display-4">Get weather by name</p>
            <div class="input-group mb-3">
                <input type="text" name="city" onChange={props.onChange} className="form-control" placeholder="Enter city's name..." />
                {button}
            </div>
            <Modal card={card} />
        </div>
    )
}


