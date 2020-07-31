import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.css';

function Nav() {
    return (
        <div className="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/">
                                <p class="nav-link" href="#">Name</p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/id">
                                <p class="nav-link" href="#">id</p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/zip">
                                <p class="nav-link" href="#">zip</p>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/cord">
                                <p class="nav-link" href="#">coordinates</p>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;