import React from 'react'
import walk from '../../assets/walk.gif'
import weather from '../../assets/windy-cloud-weather.gif'
export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <img style={{ height: 45, marginLeft: "1%" }} alt="walk" src={walk}></img>
            <div className="container">
                <h1 class="display-4">Welcome To The React Weather App
                <img style={{ height: 60, marginLeft: "1%" }} alt="weather" src={weather}></img>
                </h1>
                <p className="lead">You can search weather by city's name, city's id, city's zipcode, and city's geographic coordinates.</p>
            </div>
        </div>
    )
}
