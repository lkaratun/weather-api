import { Router } from 'express';
import axios from 'axios';

const router = Router();

const URL = 'https://api.openweathermap.org/data/2.5/weather';

function fetchWeather(city) {
	const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
	return axios.get(URL, { params: { q: city, appid: API_KEY } }).then(res => res.data);
}

router.get('/', async (req, res) => {
	const weather = await fetchWeather(req.query.city);
	res.send(weather);
});

export default router;
