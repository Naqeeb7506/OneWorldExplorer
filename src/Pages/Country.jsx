import React, { useEffect, useState, useTransition } from "react";
import { getCountry } from "../api/CountryApi";
import Loader from "../components/Loader";
import "../assets/CSS/about.css";
import { Link, Outlet } from "react-router-dom";
import SearchFilters from "../components/SearchFilters";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  const searchCountry = (country) =>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    } else{
      return country
    }
  }

  const filterRegion = (country) =>{
    if(filter === "All") return country
    return country.region === filter
  }

  const filteredCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountry();
      setCountries(res.data);
      console.log(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <div className="countries container">
      <div className="heading text-center py-5">
        <h1>List Of Countries</h1>
      </div>
      <SearchFilters search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
      <div className="cards">
        {filteredCountries.map((data) => {
          return (
            <div className="card_box country_box">
              <div className="country_flag">
                <img src={data.flags.png} alt="flag" />
              </div>
              <div className="card_content mt-3 d-flex flex-column gap-2">
                <h3>{data.name.common}</h3>
                <p>
                  <span>Flag:</span> {" "}
                  {
    data.flags?.alt
      ? data.flags.alt.length > 50
        ? data.flags.alt.slice(0, 50) + "..."
        : data.flags.alt
      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
                </p>
                <p>
                  <span>Region:</span> {data.region}
                </p>
                <p>
                  <span>Capital:</span> {data.capital}
                </p>
                <p>
                  <span>Population:</span> {data.population}
                </p>
                <Link to={`/country/${data.name.common}`}>Read More</Link>
              </div>

            </div>
              
          );
        })}
      </div>

<Outlet/>
    </div>
  );
};

export default Country;
