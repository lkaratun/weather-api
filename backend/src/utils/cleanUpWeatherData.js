export function cleanUpWeatherData(data) {
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
