import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export default function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img
                    alt="logo"
                    src="https://nerdysoft.com/wp-content/uploads/2020/11/Logotype@2x-300x89.png"
                    width="90"
                    height="40"
                />
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">

                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Articles </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add_post">Add post</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            name="search"
                            id="search"
                            type="search"
                            onChange={props.handleChange}
                            placeholder="Search"
                        />
                    </form>
                </div>
            </nav>
        </header>
    )
}
