import React, { Component } from 'react'
import Axios from 'axios'

export default class Weather extends Component {


    state = {
        value: "",
        city: "",
        key: "165f80a4a96da8b814f1352ed82fd43a"
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value

        })
    }
    change = event => {
        this.setState({ value: event.target.value });
    }
    get = () => {
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.value}&APPID=${this.state.key}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <input type="text" name="city" onChange={this.handleChange} placeholder="Enter city's name"></input>
                <select id="lang" onChange={this.change} value={this.state.value}>
                    <option value="" selected>Select Country</option>
                    <option value="uk">UK</option>
                    <option value="us">USA</option>
                    <option value="CN">China</option>
                </select>
                <button onClick={this.get}>get weather</button>
            </div>
        )
    }
}
