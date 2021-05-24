import { useState } from 'react';
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

	function handleClick() {
		setWeather(FAKE_WEATHER);
	}

	return (
		<div className="App">
			<h1>Weather API</h1>
			<div>
				<label htmlFor="city-input">City name</label>
				<input type="text" id="city-input" />
			</div>
			<button onClick={handleClick}>Get current weather</button>
			<div>Current weather: {JSON.stringify(weather, null, 2)}</div>
		</div>
	);
}

export default App;
