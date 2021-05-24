import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';

export function fetchWeather(city) {
	const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
	const defaultParams = { appid: API_KEY, units: 'metric' };
	return axios
		.get(URL, { params: { ...defaultParams, q: city } })
		.then(res => res.data)
		.catch(
			err =>
				// Send the message to our error monitoring service and return its contents
				err.response.data
		);
}
