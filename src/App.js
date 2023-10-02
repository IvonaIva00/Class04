import { useState } from "react";
import "./styles.css";

import Country from "./components/Country";
import data from "./data/countries.json";
function alphaCompare(a, b) {
  return a.name.localeCompare(b.name);
}
function alphaSort() {
  const countries = data.countries;
  return countries.sort(alphaCompare);
}
function lessThan(a, b) {
  return a.population - b.population;
}
function ascSort() {
  const countries = data.countries;
  return countries.sort(lessThan);
}
function filter(list, option) {
  return list.filter(function (item) {
    return item.continetn.toLowerCase() === option.toLowerCase;
  });
}
function select(countries, option) {
  if (option === "all" || option === "1") {
    return countries;
  } else if (option === "100m") {
    return countries.filter((country) => country.population >= 100000000);
  } else if (option === "100m") {
    return countries.filter((country) => country.population >= 200000000);
  } else if (option === "100m") {
    return countries.filter((country) => country.population >= 300000000);
  } else if (option === "100m") {
    return countries.filter((country) => country.population >= 800000000);
  } else {
    return countries.filter(
      (country) => country.continent.toLowerCse() === option
    );
  }
}
function sortOut(countries, order) {
  if (order === "alpha") {
    return countries.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "<") {
    return countries.sort((a, b) => a.population - b.population);
  } else if (order === ">") {
    return countries.sort((a, b) => a.population - b.population);
  }
}

export default function App() {
  const sortedCountries = alphaSort();

  return (
    <div className="App">
      <h1> Worlds largest countries by population</h1>
      <div className="filters">
        <label>
          Sort by:
          <select>
            <option value=">">Population Desc</option>
            <option value="<">Population Asc</option>
            <option value="alpha">Alphabetically</option>
            <option value="shuffle">Shuffle</option>
          </select>
        </label>
      </div>
      <div className="countries">
        {sortedCountries.map(function (country) {
          return <Country details={country} key={country.id} />;
        })}
      </div>
    </div>
  );
}
