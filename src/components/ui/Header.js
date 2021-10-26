import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <section id="title">
        <nav className="navbar  navbar-expand-lg navbar-dark">
          <NavLink className="navbar-brand navbrand" to="/home">
            News
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <NavLink to="/home"><h4>Home</h4></NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="/world"><h4>World</h4></NavLink>

              </li>
              <li className="nav-item">
              <NavLink to="/arts"><h4>Arts</h4></NavLink>

              </li>
              <li className="nav-item">
            <NavLink to="/science"><h4>Science</h4></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/us" >
            <h4>
              Us
              </h4>
            </NavLink>
          </li>
            </ul>
          </div>
        </nav>
    </section>
  );
}

export default Header;
