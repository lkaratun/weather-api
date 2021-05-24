import { Router } from 'express';
import axios from 'axios';

const router = Router();

const URL = 'https://api.openweathermap.org/data/2.5/weather';

function fetchWeather(city) {
	const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
	const defaultParams = { appid: API_KEY, units: 'metric' };
	return axios
		.get(URL, { params: { ...defaultParams, q: city } })
		.then(res => res.data)
		.catch(err => {
			// Parse error code/message and send it to our error monitoring service
			throw new Error('Error fetching data from openweathermap');
		});
}

function cleanUpWeatherData(data) {
	return {
		id: data.id,
		city: data.name,
		descriptionShort: data.weather?.[0]?.main,
		descriptionLong: data.weather?.[0]?.description,
		temperature: {
			current: data.main?.temp,
			feelsLike: data.main?.feels_like,
			min: data.main?.temp_min,
			max: data.main?.temp_max
		},
		wind: data.wind,
		humidity: data.main?.humidity
	};
}

router.get('/', async (req, res) => {
	try {
		const weather = await fetchWeather(req.query.city);
		res.send(cleanUpWeatherData(weather));
	} catch (e) {
		res.sendStatus(500);
	}
});

export default router;
