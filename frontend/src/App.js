import { useState } from 'react';
import axios from 'axios';
import './App.css';

const FAKE_WEATHER = {
	weather: [
		{
			id: 804,
			main: 'Clouds',
			description: 'overcast clouds',
			icon: '04d'
		}
	],
	main: {
		temp: 11.71,
		feels_like: 11.39,
		temp_min: 10.57,
		temp_max: 13.94,
		pressure: 1016,
		humidity: 94
	},
	wind: {
		speed: 2.68,
		deg: 104,
		gust: 8.05
	},
	id: 6173331,
	name: 'Vancouver'
};

function App() {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);
	const [city, setCity] = useState('Vancouver');

	async function handleClick() {
		if (city === '') return setError('Please enter a city name first');
		const backendUrl = 'http://localhost:3000/weather';
		const response = await axios.get(backendUrl, { params: { city } }).then(res => res.data);
		setWeather(response);
	}

	return (
		<div className="App">
			<h1>Weather API</h1>
			<div>
				<label htmlFor="city-input">City name</label>
				<input type="text" id="city-input" value={city} onChange={e => setCity(e.target.value)} />
			</div>
			<button onClick={handleClick}>Get current weather</button>
			{error !== null && <div>{error}</div>}
			{weather !== null && (
				<div className="weather">
					<div>City: {weather.city}</div>
					<div>
						{weather.descriptionShort} ({weather.descriptionLong})
					</div>
					<div>
						Temperature: {Math.round(weather.temperature.current)}, feels like{' '}
						{Math.round(weather.temperature.feelsLike)}, low {Math.round(weather.temperature.min)}, high{' '}
						{Math.round(weather.temperature.max)}
					</div>
					<div>
						Wind {Math.round(weather.wind.speed)} m/s, gusts up to {Math.round(weather.wind.gust)} m/s
					</div>
					<div>Humidity {Math.round(weather.humidity)}%</div>
				</div>
			)}
		</div>
	);
}

export default App;
