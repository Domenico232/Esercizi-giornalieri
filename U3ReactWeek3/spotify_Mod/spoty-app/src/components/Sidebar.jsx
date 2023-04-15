import {Link} from "react-router-dom"
import SpotyLogo from "../assets/Spotify_Logo.png"

export const Sidebar = () =>{
    return (
    <>
    <div className="col-2">
      <nav
        className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <Link className="navbar-brand" to="/">
            <img
              src={SpotyLogo}
              alt="Spotify_Logo"
              width={131}
              height={40}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link" to="/">
                    <i className="fas fa-home fa-lg" />
                    &nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link" to="/">
                    <i className="fas fa-book-open fa-lg" />
                    &nbsp; Your Library
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn d-flex" type="button">
            Login
          </button> 
          <a href="/">Cookie Policy</a> |<a href="/"> Privacy</a>
        </div>
      </nav>
    </div> </>)
}