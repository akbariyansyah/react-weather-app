import React, { Component } from 'react'
import Axios from 'axios'
import Card from './Card'

export default class WeatherByName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: "165f80a4a96da8b814f1352ed82fd43a",
            show: false,
            city: "",
            country: "",
            display: {
                cityName: "",
                temp: 0,
                tempMax: 0,
                tempMin: 0,
                desc : "",
                icon : ""

            }
        }
    }

    componentDidMount() {

    }

    changeCountry = event => {
        this.setState({
            ...this.state,
            country: event.target.value
        });
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    getData = () => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=${this.state.key}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    show: true,
                    display: {
                        cityName: res.data.name,
                        temp: res.data.main.temp,
                        tempMax: res.data.main.temp_max,
                        tempMin: res.data.main.temp_min,
                        desc : res.data.weather[0].description,
                        icon : res.data.weather[0].icon
                    }

                })
            })
            .catch(err => console.log(err))
    }
    render() {
        let card
        if (this.state.show) {
            card = <Card
                city={this.state.display.cityName}
                temp={this.state.display.temp}
                tempMax={this.state.display.tempMax}
                tempMin={this.state.display.tempMin}
                desc={this.state.display.desc}
                icon={this.state.display.icon}
            />
        }
        return (
            <div>
                <h2>get weather by name</h2>
                <select id="lang" onChange={this.changeCountry} value={this.state.country}>
                    <option value="" selected>Select Country</option>
                    <option value="uk">UK</option>
                    <option value="us">USA</option>
                    <option value="CN">China</option>
                    <option value="ID">Indonesia</option>
                </select>
                <input type="text" name="city" onChange={this.handleChange} placeholder="Enter city's name"></input>

                <button onClick={() => this.getData()}>get weather</button>
            {card}
            </div>
        )
    }
}

