import React, { useState, useEffect } from 'react';
import { Cards, Chart, Selector } from './components'
import styles from './App.module.css'
import { fetchData } from './context/api'
import image from './images/image.png';
function App() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('')



  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData(country));
    };

    fetchAPI();
  }, [country]);

  function handleCountryChange(country) {
    setCountry(country)
    //console.log(country)
  }
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <Selector handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>

  );
}


export default App;
