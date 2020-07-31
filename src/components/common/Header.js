import React from 'react'

export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="container">
                <h1 class="display-4">Welcome To The React Weather App</h1>
                <p className="lead">You can search weather by city's name, city's id, city's zipcode, and city's geographic coordinates.</p>
            </div>
        </div>
    )
}
