import { Router } from 'express';
import reformatWeatherData from '../utils/reformatWeatherData';
import { fetchWeather } from '../dataSources/openWeatherMap';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const weather = await fetchWeather(req.query.city);
		res.send(reformatWeatherData(weather));
	} catch (e) {
		res.sendStatus(500);
	}
});

export default router;
