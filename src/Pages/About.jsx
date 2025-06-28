import React from 'react'
import "../assets/CSS/about.css"
import { countries } from '../api/CountryData'

const About = () => {
  return (
    <div className='py-5'>
      <div className="container">
        <div className="heading text-center">
        <h1>Here are the interesting Facts <br /> about the World</h1>
      </div>
      <div className="cards">
        {countries.map((data)=>{
          return(
            <div className="card_box" key={data.id}>
          <h2>{data.name}</h2>
          <p><span>Capital:</span> {data.capital}</p>
          <p><span>Population:</span> {data.population} Millions</p>
          <p><span>Interesting Fact:</span> {data.interestingFacts}</p>
        </div>
          )
        })}
        
      </div>
      </div>
    </div>
  )
}

export default About