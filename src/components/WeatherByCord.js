import React, { Component } from 'react'
import Card from './Card'
import { loadByCord } from '../services/WeatherApi'
export default class WeatherByCord extends Component {
    getData = (city, country, app_key) => {
        loadByCord(city, country, app_key).then(res => {
            console.log(res)
            this.props.load(res)
        })
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
                <h2>get weather by coordinates</h2>
             
                <input type="text" name="lat" onChange={this.props.onChange} placeholder="Enter city's latitude"></input>
                <input type="text" name="lon" onChange={this.props.onChange} placeholder="Enter city's longitude"></input>

                <button onClick={() => this.getData(this.props.lat, this.props.lon, this.props.app_key)}>get weather</button>
                {card}
            </div>
        )
    }
}

