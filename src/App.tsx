import { useState } from 'react';
import './App.css'
import Header from './components/layout/Header/Header';
import SearchBar from './components/search/SearchBar/SearchBar';
import WeatherGrid from './components/weather/WeatherGrid/WeatherGrid';
import weatherService from './services/weather.service';

export default function App() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [weatherRequesting, setWeatherRequesting] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  const handleFetchForecast = async (q: { latitude: number, longitude: number, name: string }) => {
    try {
      const data = await weatherService.getForecast(q);
      setWeatherData({
        ...data,
        name: q.name
      });
    } catch (error) {
      console.error(error);
      setWeatherError(error?.reason || 'There was an error trying to find the forecast. Please try again later.')
    }
  }

  return (
    <div className='wrapper'>
      <Header />
      <main id='main-content'>
        <h1>How's the sky looking today?</h1>
        <section id='search-section'>
          <SearchBar
            placeholder='Search for a place...'
            onSubmit={handleFetchForecast}
          />
        </section>
        {weatherData && !weatherError ? (
          <section id='weather-section'>
            <WeatherGrid data={weatherData} loading={weatherRequesting} />
          </section>
        ) : null}
        {weatherError ? (
          <section id='weather-section'>
            <p>{weatherError}</p>
          </section>
        ) : null}
      </main>
    </div>
  )
}
