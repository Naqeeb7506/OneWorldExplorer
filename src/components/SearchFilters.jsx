import React, { useState } from 'react'
import "../assets/CSS/search.css"

const SearchFilters = ({search, setSearch, filter, setFilter, countries, setCountries}) => {

    const [activeSort, setActiveSort] = useState("")

    const sortCountries = (value) => {
        setActiveSort(value)
        const sortCountry = [...countries].sort((a,b)=>{
            return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        })

        setCountries(sortCountry)
    }   

  return (
    <div className='d-flex justify-content-between align-items-center'>
        <div className="search">
            <input type="text" name="search" id="serach" placeholder='Search' className='search-input' value={search} onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div className="btns d-flex align-items-center gap-5">
            <div className="asc">
            <button className={activeSort === "asc" ? "active" : ""} onClick={() => sortCountries("asc")}>Asc</button>
        </div>
        <div className="desc">
            <button className={activeSort === "desc" ? "active" : ""} onClick={() => sortCountries("desc")}>Desc</button>
        </div>
        </div>
        <select name="region" id="region" value={filter} onChange={(e)=> setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default SearchFilters