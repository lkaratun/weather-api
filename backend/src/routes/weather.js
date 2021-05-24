import { Router } from 'express';
import reformatWeatherData from '../utils/reformatWeatherData';
import { fetchWeather } from '../dataSources/openWeatherMap';

const router = Router();

router.get('/', async (req, res) => {
	const weather = await fetchWeather(req.query.city);
	res.status(weather.cod);
	res.send(reformatWeatherData(weather));
});

export default router;
