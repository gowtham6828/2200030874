import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.heading}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  {props.homepage}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.contact}
                </Link>
              </li>
            </ul>
            <Link className="btn btn-primary" to="/register">
              REGISTER
            </Link>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
