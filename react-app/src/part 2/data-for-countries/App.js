import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryListItem from './components/CountryListItem';
import CountryCard from './components/CountryCard';

const App = () => {
    const [search, setSearch] = useState('');
    const [searchedList, setSearchedList] = useState([]);
    const url = 'https://studies.cs.helsinki.fi/restcountries/api/all';

    const handleOnChange = e => {
        const {value} = e.target;
        setSearch(value);
    }

    const getData = (search) => {
        const request = axios.get(url)
            .then(response => {
                const data = response.data;
                const newSearchedList = data.filter((item) => item.name.common.toLowerCase().includes(search.toLowerCase()));
                setSearchedList(newSearchedList);
            })
    }

    useEffect(() => {
        if(search.length !== 0){
            getData(search);
        }
    }, [search])

  return (
    <div>
        <h1>data for countries</h1>
        <p>find countries</p>
        <input type='text' value={search} onChange={handleOnChange} />
        {searchedList.length < 10 && searchedList.length > 1 ?
            searchedList.map((item) => <CountryListItem setSearch={setSearch} key={item.name.common} {...item} />)
        : searchedList.length !== 0 && searchedList.length !== 1 &&
            <p>Too many matches, specify another filter</p>
        }
        {searchedList.length === 1 &&
            <CountryCard {...searchedList[0]} />
        }
    </div>
  )
}

export default App;