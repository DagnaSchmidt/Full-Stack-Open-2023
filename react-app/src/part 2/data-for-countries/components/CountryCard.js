import React from 'react';

const CountryCard = ({name, capital, area, languages, flags}) => {
    const langArray = [];
    Object.keys(languages).forEach((key) => {
        const newLang = languages[key]
        langArray.push(newLang);
    });

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
    </div>
  )
}

export default CountryCard;