import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const CountryDetails = () => {

  const { countryId } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
  axios.get(`https://ih-countries-api.herokuapp.com/countries/${country.Id}`)
  .then((response) => {
    setCountryData(response.data);
  }) .catch((error) => {
    console.log("Error with fetching countra data:", error)
  })
}, [countryId]);


return (
<>
    <div>
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">WikiCountries</a>
      </div>
    </nav>

    
    <div className="container">
      <p style= {{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <h1>{countryData.name.common}</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style= {{width:"30%"}}>Capital</td>
            <td>{countryData.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryData.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
              {countryData.borders.map((borderCountryId) => (
                    <li key={borderCountryId}>
                      <a href={`/${borderCountryId}`}>{borderCountryId}</a>
                    </li>
                  ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>
);
}

export default CountryDetails;
