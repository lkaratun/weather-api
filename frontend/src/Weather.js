export default function renderWeather({ weather }) {
	if (!weather) return null;

	return (
		<div className="weather">
			<div>City: {weather.city}</div>
			<div>
				{weather.descriptionShort} ({weather.descriptionLong})
			</div>
			<div>
				Temperature: {Math.round(weather.temperature.current)}, feels like {Math.round(weather.temperature.feelsLike)},
				low {Math.round(weather.temperature.min)}, high {Math.round(weather.temperature.max)}
			</div>
			<div>
				Wind {Math.round(weather.wind.speed)} m/s, gusts up to {Math.round(weather.wind.gust)} m/s
			</div>
			<div>Humidity {Math.round(weather.humidity)}%</div>
		</div>
	);
}
