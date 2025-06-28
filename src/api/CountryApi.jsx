import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1"
})

export const getCountry = () =>{
    return api.get("/all?fields=name,flags,population,region,capital")
}

// 
export const getIndividualCountry = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields name, population, region, capital, currencies, languages, flags`)
}