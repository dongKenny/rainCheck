import React, { useState,useEffect } from 'react';
import axios from 'axios';

const WeatherAPI = ({ address, onForecastFetch }) => {
  const [forecastData, setForecastData] = useState(null);
  useEffect(() => {
    if (address) {
      getLatLong(address);
    }
  }, [address]);

  const getLatLong = async (address) => {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: address,
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY
        }
      });

      const locationData = response.data.results[0];
      const { lat, lng } = locationData.geometry.location;
      const city = extractCity(locationData.address_components); 
      
      getWeather(lat, lng, city);
    } catch (error) {
      console.error('Error fetching location data in getLatLong:', error);
    }
  };

  const extractCity = (addressComponents) => {
    const cityComponent = addressComponents.find(component =>
      component.types.includes('locality')
    );
    return cityComponent ? cityComponent.long_name : addressComponents[0]['long_name'];
  };

  const getWeather = async (latitude, longitude, city) => {
    try {
      const response = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`);
      const forecastUrl = response.data.properties.forecast;
      const hourlyForecastUrl = response.data.properties.forecastHourly;

      const [forecastResponse, hourlyForecastResponse] = await Promise.all([
        axios.get(forecastUrl),
        axios.get(hourlyForecastUrl)
      ]);
      const aqi_response = await axios.get(`https://api.waqi.info/feed/${encodeURIComponent(city.trim())}/?token=${process.env.EXPO_PUBLIC_AQI_API_KEY}`);
      const aqi = aqi_response['data']['data']['aqi'];
      const parsedData = {
        dailyForecast: parseForecast(forecastResponse.data.properties.periods),
        hourlyForecast: parseHourlyForecast(hourlyForecastResponse.data.properties.periods),
        aqi: aqi
      };

      setForecastData(parsedData);
      onForecastFetch(parsedData, city);
    } catch (error) {
      console.error('Error fetching weather data in getWeather:', error);
    }
  };

  const parseForecast = (periods) => {
    return periods.map(period => ({
      name: period.name,
      isDaytime: period.isDaytime,
      temperature: period.temperature,
      rain: period.probabilityOfPrecipitation.value/100,
      humidity: period.relativeHumidity.value/100,
      windSpeed: period.windSpeed.substring(0,period.windSpeed.indexOf(" ")),
      windDirection: period.windDirection,
      shortForecast: period.shortForecast,
      detailedForecast: period.detailedForecast
    }));
  };

  const parseHourlyForecast = (periods) => {
    const hourlyForecast = {};
    periods.forEach((period, index) => {
      hourlyForecast[index] = {
        startTime: period.startTime,
        isDaytime: period.isDaytime,
        temperature: period.temperature,
        rain: period.probabilityOfPrecipitation.value/100,
        humidity: period.relativeHumidity.value/100,
        windSpeed: period.windSpeed.substring(0,period.windSpeed.indexOf(" ")),
        windDirection: period.windDirection,
        shortForecast: period.shortForecast,
      };
    });
    return hourlyForecast;
  };

  return null;
};

export default WeatherAPI;