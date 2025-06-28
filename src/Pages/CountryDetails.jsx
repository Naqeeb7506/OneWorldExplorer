import React, { useEffect, useState, useTransition } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getIndividualCountry } from '../api/CountryApi'
import Loader from '../components/Loader'
import "../assets/CSS/country.css"

const CountryDetails = () => {
    const {id} = useParams()
    console.log(id)

    const [isPending, startTransition] = useTransition();
      const [country, setCountry] = useState();
    
      useEffect(() => {
        startTransition(async () => {
          const res = await getIndividualCountry(id);
          setCountry(res.data[0]);
          console.log(res.data[0]);
        });
      }, []);

       if (isPending) return <Loader />;
  return (
    
    <div className='container country'>
         {
          country ? (
            <>
            <div className="heading text-center pt-5">
        <h1>About {country.name.common}</h1>
      </div>
      <div className="box d-flex justify-content-between gap-4">
        <div className="flag">
            <img src={country.flags.png} alt="" />
        </div>
        <div className="content">
            <h1>Country Name: {country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Flag: {country.flags.alt}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <p>Native Names: {Object.keys(country.name.nativeName)
              .map((key)=> country.name.nativeName[key].common)
              .join(", ")}</p>
            
            <p>Demonyms: {country.demonyms.eng.f}</p>
            <Link to="/country">Back</Link>
        </div>
      </div>
            </>
          ) : "No DATA"
         }
    </div>
  )
}

export default CountryDetails