import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Nav() {
    return (
        <div className="navbar">
            <ul className="nav-links">
                <Link to="/">
                    <li>name</li>
                </Link>
                <Link to="/id">
                    <li>id</li>
                </Link>
                <Link to="/zip">
                    <li>zip</li>
                </Link>

            </ul>
        </div>
    );
}

export default Nav;