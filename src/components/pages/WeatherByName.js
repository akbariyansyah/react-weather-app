import React, { Component } from 'react'
import Card from  '../common/Card'
import { loadByName } from '../../services/WeatherApi'
export default class WeatherByName extends Component {
    getData = (city, country, app_key) => {
        loadByName(city, country, app_key).then(res => this.props.load(res))
    }
    render() {
        let card
        if (this.props.show) {
            card = <Card
                city={this.props.display.cityName}
                country={this.props.display.countryName}
                temp={this.props.display.temp}
                tempMax={this.props.display.tempMax}
                tempMin={this.props.display.tempMin}
                desc={this.props.display.desc}
                icon={this.props.display.icon}
            />
        }
        return (
            <div>
                <h2>get weather by name</h2>
                <select id="lang" onChange={this.props.onChangeCountry} value={this.props.country}>
                    <option value="" selected>Select Country</option>
                    <option value="uk">UK</option>
                    <option value="us">USA</option>
                    <option value="CN">China</option>
                    <option value="ID">Indonesia</option>
                </select>
                <input type="text" name="city" onChange={this.props.onChange} placeholder="Enter city's name"></input>

                <button onClick={() => this.getData(this.props.city, this.props.country, this.props.app_key)}>get weather</button>
                {card}
            </div>
        )
    }
}

