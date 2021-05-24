import { Router } from 'express';
import { cleanUpWeatherData } from '../utils/cleanUpWeatherData';
import { fetchWeather } from '../dataSources/openWeatherMap';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const weather = await fetchWeather(req.query.city);
		res.send(cleanUpWeatherData(weather));
	} catch (e) {
		res.sendStatus(500);
	}
});

export default router;
