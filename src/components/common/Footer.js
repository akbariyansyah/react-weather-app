import React from 'react'
import '../../App.css'
import wink from '../../assets/wink.gif'
export default function Footer() {
    return (
        <div className="jumbotron jumbotron-fluid" id="footer">
            <div className="container">
                <p className="footer-text">
                    Copyright Buchori Akbariyansyah 2020
                <img style={{ height: 30, marginLeft: "1%" }} alt="wink" src={wink}></img>
                </p>

            </div>
        </div>
    )
}
