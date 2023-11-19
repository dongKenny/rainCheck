import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import Clothing from "../components/Clothes/Clothing";
import Suggestion from "../components/Clothes/Suggestion";
import Details from "../components/Details/Details";
import Header from "../components/Location/Header";
import { Weather } from "../components/Weather/Weather";
import { parseShortForecast } from "../clothing_selection";
import { ForecastBlock } from "../components/Forecast/ForecastBlock";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center", // 中央揃えに変更
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "stretch",
  },
  upperContainer: {
    flexDirection: "row",
    alignItems: "center", // 中央揃えに変更
  },
  topbox: {
    width: 200,
    height: 50,
  },
  box: {
    width: 200,
    height: 400,
  },
  bottombox: {
    width: 400,
    height: 100,
  },
  bottomContainer: {
    marginTop: 20, // 上部との余白を設定
    alignItems: "center",
  },
  button: {
    padding: 8,
    borderRadius: 5,
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 15, // Adjust the font size as needed
    fontWeight: "bold",
    textAlign: "center", // Center the text horizontally
    color: "gray", // Adjust the color as needed
  },
});

export const WeatherPage = ({ currentCity, forecastData, onIconPress }) => {
  const cityName = currentCity || "Loading...";
  const [isWeatherVisible, setIsWeatherVisible] = useState(true);

  const toggleWeather = () => {
    setIsWeatherVisible(!isWeatherVisible);
  };

  if (!currentCity && !forecastData) {
    return;
  }

  const daily = forecastData["dailyForecast"];
  const hourly = forecastData["hourlyForecast"];

  const handlePressOnIcon = () => {
    onIconPress();
  };

  const dayTimeToday = daily[0]["isDaytime"] ? daily[0] : daily[1];
  const nightTimeToday = daily[0]["isDaytime"] ? daily[1] : daily[0];

  const dayTimeTomorrow = daily[2]["isDaytime"] ? daily[2] : daily[3];
  const nightTimeTomorrow = daily[2]["isDaytime"] ? daily[3] : daily[2];

  const forecastToday = parseShortForecast(dayTimeToday["detailedForecast"]);
  const forecastTonight = parseShortForecast(dayTimeToday["detailedForecast"]);
  const forecastTomorrow = parseShortForecast(
    dayTimeTomorrow["detailedForecast"]
  );
  const forecastTomorrowNight = parseShortForecast(
    dayTimeTomorrow["detailedForecast"]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header currentCity={cityName} onIOSIconPress={handlePressOnIcon} />
      </View>
      <View style={styles.upperContainer}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Clothing dayData={dayTimeToday} nightData={nightTimeToday} />
          <Suggestion detailedForecast={daily[0]["detailedForecast"]} />
        </View>
        <View style={[styles.box, { backgroundColor: "green" }]}>
          {isWeatherVisible ? (
            <Weather
              isToday={true}
              imagePathDay={forecastToday}
              weatherInfoDay={dayTimeToday["temperature"]}
              imagePathNight={forecastTonight}
              weatherInfoNight={nightTimeToday["temperature"]}
            />
          ) : (
            <Weather
              isToday={false}
              imagePathDay={forecastTomorrow}
              weatherInfoDay={dayTimeTomorrow["temperature"]}
              imagePathNight={forecastTomorrowNight}
              weatherInfoNight={nightTimeTomorrow["temperature"]}
            />
          )}
          {/* button to select today or tomorrow */}
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: isWeatherVisible ? "lightgreen" : "lightblue",
              },
            ]}
            onPress={toggleWeather}
          >
            <Text style={styles.buttonText}>
              {isWeatherVisible ? "Tomorrow" : "Today"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.bottombox, { backgroundColor: "darkgray" }]}>
          <Details
            isToday={isWeatherVisible}
            today={dayTimeToday}
            tomorrow={dayTimeTomorrow}
            aqi={forecastData["aqi"]}
          />
        </View>
        <View style={[styles.bottombox, { backgroundColor: "#FFF7CC" }]}>
          <ForecastBlock hourlyForecast={hourly} weeklyForecast={daily} />
        </View>
      </View>
    </SafeAreaView>
  );
};
