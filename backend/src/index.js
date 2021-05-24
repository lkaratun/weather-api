import compression from 'compression';
import express from 'express';
import cors from 'cors';
import weatherRouter from './routes/weather.js';

const app = express();
app.use(
	cors({
		origin: ['https://localhost:3000', 'http://localhost:3000'],
		credentials: true
	})
);
app.use(compression());

app.listen(3000, () => console.log('Server is listening to http requests on port 3000'));

app.use('/weather', weatherRouter);
