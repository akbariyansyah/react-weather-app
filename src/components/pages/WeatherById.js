import React from 'react'
import Card from  '../common/Card'
import Modal from './Modal'
import { loadById } from '../../services/WeatherApi'
import swal from 'sweetalert'
export default function WeatherById(props) {
    const getData = (city_id, app_key) => {
        loadById(city_id, app_key).then(res => {
            if (res === undefined) {
                swal("Oops...!", "City not found!", "error");
            } else {
                props.load(res)
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
    console.log(typeof(props.city_id))
    let button
    if (props.city_id === "") {
        button =  <button className="btn btn-secondary" data-toggle="modal" disabled>get weather</button>
    } else {
        button =  <button className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => getData(props.city_id, props.app_key)}>get weather</button>
    }
    return (
         <div className="byId">
         <p className="display-4">Get weather by ID</p>
         <div class="input-group mb-3">
         <input type="number" className="form-control" name="city_id" onChange={props.onChange} placeholder="Enter city's id"></input>
             {button}
         </div>
         <Modal card={card} />
     </div>
    )
}
