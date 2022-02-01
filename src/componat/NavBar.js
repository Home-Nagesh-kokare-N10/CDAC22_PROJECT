import React from "react";
import './css/App.css'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info" variant="dark">
      <div className="container-fluid">
        <img src="OIP.jpg" className="Logo" />
        <a className="navbar-brand" href="/">
          My-socity
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" ">
                Events
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                servies
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="">
                    Home Servies
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Home grocery order
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Salon,spa,hairstyle
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    cleaning past control
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="">
                    Home repaire
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Resister as flate owenr</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">My Booking</a>
            </li>
          </ul>
          <form className="d-flex">
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
  );
}
export default NavBar;
