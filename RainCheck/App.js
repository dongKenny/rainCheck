import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WeatherPage } from "./pages/WeatherPage";
import EventPage from "./pages/EventPage";
import ForecastPrompt from "./components/Location/Prompt";
import WeatherAPI from "./weatherAPI";

export default function App() {
  const [currentAddress, setCurrentAddress] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);
  const [isweatherPage, setIsWeatherPage] = useState(true);

  useEffect(() => {
    if (!currentAddress) {
      setCurrentAddress(null);
    }
  }, []);

  const handleForecastFetch = (forecast, city) => {
    setForecastData(forecast);
    setCurrentCity(city);
  };

  const handleIconPress = () => {
    setCurrentAddress(null);
    setForecastData(null);
    setCurrentCity(null);
  };

  const handleIconPressEvents = () => {
    setCurrentAddress(null);
    setForecastData(null);
    setCurrentCity(null);
    setIsWeatherPage(true);
  };

  return isweatherPage ? (
    <View style={styles.container}>
      {currentAddress === null ? (
        <ForecastPrompt
          initialAddress={currentAddress}
          onAddressUpdate={setCurrentAddress}
        />
      ) : (
        <>
          <WeatherAPI
            address={currentAddress}
            onForecastFetch={handleForecastFetch} // Pass the function to update forecastData
          />
          <WeatherPage
            currentCity={currentCity}
            forecastData={forecastData}
            onIconPress={handleIconPress}
            onSwitchPage={() => {
              setIsWeatherPage(!isweatherPage);
            }}
          />
          <StatusBar style="auto" />
        </>
      )}
    </View>
  ) : (
    <EventPage
      cityName={currentCity}
      events_data={forecastData['events'] ? forecastData['events'] : []}
      handlePressOnIcon={handleIconPressEvents}
      onSwitchPage={() => {
        setIsWeatherPage(true);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
