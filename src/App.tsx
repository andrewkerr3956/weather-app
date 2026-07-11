import { useState } from 'react';
import './App.css'
import Header from './components/layout/Header/Header';
import SearchBar from './components/search/SearchBar/SearchBar';
import WeatherGrid from './components/weather/WeatherGrid/WeatherGrid';

export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherRequesting, setWeatherRequesting] = useState(false);

  return (
    <div className='wrapper'>
      <Header />
      <main id='main-content'>
        <h1>How's the sky looking today?</h1>
        <section id='search-section'>
          <SearchBar 
            placeholder='Search for a place...'
          />
          <button className='btn search-btn'>
            Search
          </button>
        </section>
        <section id='weather-section'>
          <WeatherGrid />
        </section>
      </main>
    </div>
  )
}
