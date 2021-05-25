import { config } from 'dotenv';
import compression from 'compression';
import express from 'express';
import cors from 'cors';
import weatherRouter from './routes/weather.js';

config();

const app = express();
app.use(
	cors({
		origin: ['https://localhost:5000', 'http://localhost:5000'],
		credentials: true
	})
);
app.use(compression());

app.listen(5001, () => console.log('Server is listening to http requests on port 5001'));

app.use('/weather', weatherRouter);
