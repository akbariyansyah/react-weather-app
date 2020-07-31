import React, { Component } from 'react'
import Card from './Card'
import { loadByZip } from '../services/WeatherApi'
export default class WeatherByName extends Component {
    getData = (city_zip, country, app_key) => {
        loadByZip(city_zip, country, app_key).then(res => this.props.load(res))
    }
    render() {
        let card
        if (this.props.show) {
            card = <Card
                city={this.props.display.cityName}
                temp={this.props.display.temp}
                tempMax={this.props.display.tempMax}
                tempMin={this.props.display.tempMin}
                desc={this.props.display.desc}
                icon={this.props.display.icon}
            />
        }
        return (
            <div>
                <h2>get weather by zip</h2>
                <select id="lang" onChange={this.props.onChangeCountry} value={this.props.country}>
                    <option value="" selected>Select Country</option>
                    <option value="uk">UK</option>
                    <option value="us">USA</option>
                    <option value="CN">China</option>
                    <option value="ID">Indonesia</option>
                </select>
                <input type="text" name="city_zip" onChange={this.props.onChange} placeholder="Enter city's zip"></input>

                <button onClick={() => this.getData(this.props.city_zip, this.props.country, this.props.app_key)}>get weather</button>
                {card}
            </div>
        )
    }
}

