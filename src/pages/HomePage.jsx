import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countries data from the API
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        // Store the retrieved data in the 'countries' state
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>

      <div className="container" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <h1 style={{ fontSize: "24px" }}>WikiCountries: Your Guide to the World</h1>

{/*
        <div className="list-group"> */}
          {/* Render the list of country names */}

{/*         {countries.map((country) => (
            <a key={country.alpha3Code} className="list-group-item" href={`/${country.alpha3Code}`}>
              {country.name.common}
            </a>
          ))}
        </div>
*/}

<div className="list-group">
          {/* Render the list of country links */}
          {countries.map((country) => (
            <Link key={country.alpha3Code} to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
                style={{ marginRight: "10px", display: "flex", flexDirection: "column" }}
              />
              {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
