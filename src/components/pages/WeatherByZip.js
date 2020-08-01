import React from 'react'
import Card from '../common/Card'
import Modal from '../common/Modal'
import { loadByZip } from '../../services/WeatherApi'
import swal from 'sweetalert'

export default function WeatherByZip(props) {
    const getData = (city_zip, country, app_key) => {
        loadByZip(city_zip, country, app_key).then(res => {
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
    let button;
    if (props.city_zip === "" || props.country === "") {
        button = <button data-toggle="modal" className="btn btn-secondary">get weather</button>
    } else {
        button = <button data-toggle="modal" className="btn btn-outline-primary" data-target="#exampleModal" onClick={() => getData(props.city_zip, props.country, props.app_key)}>get weather</button>
    }
    return (
        <div className="byZip">
            <p className="display-4">Get weather by zip</p>
            <select id="lang" className="form-control" onChange={props.onChangeCountry} value={props.country}>
                <option value="" selected>Select Country</option>
                <option value="uk">UK</option>
                <option value="us">USA</option>
                <option value="CN">China</option>
                <option value="ID">Indonesia</option>
            </select>
            <div class="input-group mb-3 mt-4">
                <input type="text" name="city_zip" onChange={props.onChange} className="form-control" placeholder="Enter city's zip"></input>
                {button}
            </div>
            <Modal card={card} />
        </div>
    )
}


