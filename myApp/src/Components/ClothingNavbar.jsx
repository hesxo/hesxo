import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";

const ClothingNavbar = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateLadies = () => {
    navigate("/ladies");
  };

  const navigateGents = () => {
    navigate("/gents");
  };

  const navigateKids = () => {
    navigate("/kids");
  };

  const navigateAdmin = () => {
    navigate("/admin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={navigateHome}>
          Home
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
                Clothing
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li onClick={navigateGents}>
                  <a className="dropdown-item" href="#">
                    Gents
                  </a>
                </li>
                <li onClick={navigateLadies}>
                  <a className="dropdown-item" href="#">
                    Laides
                  </a>
                </li>

                <li onClick={navigateKids}>
                  <a className="dropdown-item" href="#">
                    Kids
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

export default ClothingNavbar;
