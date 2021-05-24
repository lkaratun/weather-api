import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);
	const [city, setCity] = useState('Vancouver');

	function fetchWeather() {
		const backendUrl = 'http://localhost:3000/weather';
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

	function renderWeather() {
		if (!weather || error) return null;
		return (
			<div className="weather">
				<div>City: {weather.city}</div>
				<div>
					{weather.descriptionShort} ({weather.descriptionLong})
				</div>
				<div>
					Temperature: {Math.round(weather.temperature.current)}, feels like {Math.round(weather.temperature.feelsLike)}
					, low {Math.round(weather.temperature.min)}, high {Math.round(weather.temperature.max)}
				</div>
				<div>
					Wind {Math.round(weather.wind.speed)} m/s, gusts up to {Math.round(weather.wind.gust)} m/s
				</div>
				<div>Humidity {Math.round(weather.humidity)}%</div>
			</div>
		);
	}

	return (
		<div className="App">
			<h1>Weather API</h1>
			<div>
				<label htmlFor="city-input">City name</label>
				<input type="text" id="city-input" value={city} onChange={e => setCity(e.target.value)} />
			</div>
			<button onClick={handleClick}>Get current weather</button>
			{error !== null && <div className="error">{error}</div>}
			{renderWeather()}
		</div>
	);
}

export default App;
