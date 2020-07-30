import React, { Component } from 'react'
import Axios from 'axios'
import Card from './Card'

export default class WeatherByName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            country: "",
        }
    }

    changeCountry = event => {
        this.setState({
            ...this.state,
            country: event.target.value
        });
    }
    getData = () => {
        console.log(this.props.city)
        console.log(this.props.country)
        console.log(this.props.app_key)
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.city},${this.props.country}&APPID=${this.props.app_key}`)
            .then(res => {
                    this.props.load(res)
            })
            .catch(err => console.log(err))
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
                <h2>get weather by name</h2>
                <select id="lang" onChange={this.props.onChangeCountry} value={this.props.country}>
                    <option value="" selected>Select Country</option>
                    <option value="uk">UK</option>
                    <option value="us">USA</option>
                    <option value="CN">China</option>
                    <option value="ID">Indonesia</option>
                </select>
                <input type="text" name="city" onChange={this.props.onChange} placeholder="Enter city's name"></input>

                <button onClick={() => this.getData()}>get weather</button>
            {card}
            </div>
        )
    }
}

