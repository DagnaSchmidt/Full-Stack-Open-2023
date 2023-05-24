import React, { useEffect, useState } from 'react';
import axios from 'axios';
const KEY = process.env.REACT_APP_GEODB_KEY

const CountryCard = ({name, capital, area, languages, flags, latlng }) => {
    const [weather, setWeather] = useState(null);
    const langArray = [];
    Object.keys(languages).forEach((key) => {
        const newLang = languages[key]
        langArray.push(newLang);
    });
    console.log(latlng);

    useEffect(() =>{
        const forecast = {
            method: 'GET',
            url: `https://foreca-weather.p.rapidapi.com/current/${latlng[1]},${latlng[0]}`,
            params: {alt: '0', tempunit: 'C', windunit: 'MS'},
            headers: {
                'X-RapidAPI-Key': KEY,
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
            }
        };
        axios.request(forecast).then(function (response) {
            const json = response.data.current;
            console.log(json);
            setWeather(json);
        })
    }, [])


  return (
    <div>
        <h3>{name.common}</h3>
        <p>capital: {capital[0]}</p>
        <p>area: {area}</p>
        <p>languages:</p>
        <ul>
            {langArray.length !== 0 &&
                langArray.map((item) => <li key={item}>{item}</li>)
            }
        </ul>
        <img src={flags.png} style={{width: '300px'}}/>
        {weather !== null &&
            <>
                <h4>Weather in {name.common}</h4>
                <p>temperature {weather.temperature} celcius</p>
                <p>wind {weather.windSpeed} m/s</p>
            </>
        }
        
    </div>
  )
}

export default CountryCard;