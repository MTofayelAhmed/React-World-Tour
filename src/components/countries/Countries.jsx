import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./country-container.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const [vistedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlags = (flag) => {
    const visitedCountryFlag = [...visitedFlags, flag];
    setVisitedFlags(visitedCountryFlag);
  };
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...vistedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <h5>Visited Country: {vistedCountries.length} </h5>
      {vistedCountries.map((country) => {
        <li>{country.name.common}</li>;
      })}
      {/* display flags */}
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => {
          <img key={idx} src={flag} alt="" />;
        })}
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca2}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
