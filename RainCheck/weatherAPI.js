import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';

const WeatherAPI = ({ address, onForecastFetch }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (address) {
      getLatLong(address);
    }
  }, [address]);

  const getLatLong = async () => {
    const googleMapsApiKey = process.env.GOOGLE_API_KEY;
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: address,
          key: googleMapsApiKey
        }
      });
      const { lat, lng } = response.data.results[0].geometry.location;
      getWeather(lat, lng);
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  const getWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://api.weather.gov/points/${latitude},${longitude}`);
      const forecastUrl = response.data.properties.forecast;
      const hourlyForecastUrl = response.data.properties.forecastHourly;

      const [forecastResponse, hourlyForecastResponse] = await Promise.all([
        axios.get(forecastUrl),
        axios.get(hourlyForecastUrl)
      ]);

      const parsedData = {
        dailyForecast: parseForecast(forecastResponse.data.properties.periods),
        hourlyForecast: parseHourlyForecast(hourlyForecastResponse.data.properties.periods)
      };

      setForecastData(parsedData);

    } catch (error) {
      console.error('Error fetching weather data:', error);
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

  const handleSubmit = () => {
    getLatLong();
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      {forecastData && <Text style={{ marginTop: 20 }}>{JSON.stringify(forecastData, null, 2)}</Text>}
    </ScrollView>
  );
  /*
  return (
    <ScrollView style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
        value={address}
        placeholder="Enter address"
      />
      <Button
        onPress={handleSubmit}
        title="Get Weather Forecast"
      />
      {forecastData && <Text style={{ marginTop: 20 }}>{JSON.stringify(forecastData, null, 2)}</Text>}
    </ScrollView>
  );
  */
};

export default WeatherAPI;