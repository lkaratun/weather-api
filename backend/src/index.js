import { config } from 'dotenv';
import compression from 'compression';
import express from 'express';
import cors from 'cors';
import weatherRouter from './routes/weather.js';

config();

const app = express();
app.use(
	cors({
		origin: ['https://localhost:6000', 'http://localhost:6000', 'https://weather.levkaratun.com'],
		credentials: true
	})
);
app.use(compression());

app.listen(6001, () => console.log('Server is listening to http requests on port 6001'));

app.use('/weather', weatherRouter);
