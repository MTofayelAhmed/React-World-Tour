import { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h5>Country Name: {name?.common}</h5>
      <img src={flags.png} alt="" />
      <p> Population: {population}</p>
      <h5> Area: {area}</h5>
      <p>
        <small> {cca3} </small>{" "}
      </p>

      <button onClick={handleVisited}>Visited</button>

      {visited ?  "I have visited this country" : "I have the interest to visit"}
    </div>
  );
};

export default Country;
