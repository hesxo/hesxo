import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  // navbar Navigation
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateAdmin = () => {
    navigate("/admin");
  };

  const navigateClothing = () => {
    navigate("/clothing");
  };

  const navigateKitchen = () => {
    navigate("/kitchen");
  };
  const navigatePets = () => {
    navigate("/pets");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div onClick={navigateHome}>
          <a className="navbar-brand">Home</a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={navigateAdmin}>
              <a className="nav-link active" aria-current="page" href="#">
                Admin
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
                Collection
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li onClick={navigateClothing}>
                  <a className="dropdown-item" href="#">
                    Clothing
                  </a>
                </li>
                <li onClick={navigateKitchen}>
                  <a className="dropdown-item" href="#">
                    Kitchen & Dining
                  </a>
                </li>

                <li onClick={navigatePets}>
                  <a className="dropdown-item" href="#">
                    Pet Care
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tools
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
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
};

export default Navbar;
