import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <Link className="navbar-brand" to="/"><img src={require('./logo.png')} width="100" height="56" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/recipesearch">Recipe Search</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/ingredientsearch">Ingredient Search</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/customrecipe">Create Custom Recipe</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/saved">Browse Saved Recipes</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <br />
    </Fragment>
  )
};


export default Navbar;
