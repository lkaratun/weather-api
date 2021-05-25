import { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import './App.css';

function App() {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);
	const [city, setCity] = useState('Vancouver');

	function fetchWeather() {
		const backendUrl = 'https://api.weather.levkaratun.com/weather';
		return axios
			.get(backendUrl, { params: { city } })
			.then(res => res.data)
			.catch(err => {
				setError(err.response.data.message);
			});
	}

	async function handleClick() {
		setError(null);
		if (city === '') {
			setError('Please enter a city name first');
			setWeather(null);
			return;
		}

		const weather = await fetchWeather();
		setWeather(weather);
	}

	return (
		<div className="App">
			<h1>Weather API</h1>
			<div>
				<label htmlFor="city-input">City name</label>
				<input type="text" id="city-input" value={city} onChange={e => setCity(e.target.value)} />
			</div>
			<button onClick={handleClick}>Get current weather</button>
			{error ? <div className="error">{error}</div> : <Weather weather={weather} />}
		</div>
	);
}

export default App;
