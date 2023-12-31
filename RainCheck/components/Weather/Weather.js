import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

export function getWeatherAsset(imageType) {
  switch (imageType) {
    case "cloudy":
      return require("../../assets/weather/cloudy.png");
    case "rain":
      return require("../../assets/weather/rain.png");
    case "sunny":
      return require("../../assets/weather/sunny.png");
    case "snow":
      return require("../../assets/weather/snow.png");
    case "storm":
      return require("../../assets/weather/snow.png");
    case "clear":
      return require("../../assets/weather/clear.png");
    case "heavyRain":
      return require("../../assets/weather/heavyRain.png");
    case "typhoon":
      return require("../../assets/weather/typhoon.png");
    case "moon":
      return require("../../assets/weather/moon.png");
    default:
      // No default case
      break;
  }
  return;
}

/**
 *
 * @param {
 *  isToday: true if is today
 *  imagePathDay: image path (String)
 *  WeatherInfoDay: info for the average weather(String)
 *  imagePathNight: image path (String)
 *  imagePathNight: image path (String)
 *  WeatherInfoNight: info for the average weather(String)
 * } props
 * @returns
 */

export const Weather = (props) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const formattedDate = props.isToday
    ? today.toLocaleDateString()
    : tomorrow.toLocaleDateString();
  let imagePathDay = getWeatherAsset(props.imagePathDay);
  let imagePathNight = getWeatherAsset(
    props.imagePathNight === "sunny" ? "moon" : props.imagePathNight
  );

  return (
    <View style={styles.container}>
      <View style={styles.spaceBetween}></View>
      <Text style={styles.text}>{"      " + formattedDate}</Text>

      <View style={styles.spaceBetween}></View>
      <View style={styles.dayandnightContainer}>
        <View style={styles.dayContainer}>
          <Text style={styles.daytext}>{"Day"}</Text>
          <View style={styles.imageAndInfoContainer}>
            <Image style={styles.image} source={imagePathDay} />
            <Text style={styles.weatherInfo}>
              {props.weatherInfoDay}
              {" °F"}
            </Text>
          </View>
        </View>
        <View style={styles.nightContainer}>
          <Text style={styles.nighttext}>{"Night"}</Text>
          <View style={styles.imageAndInfoContainer}>
            <Image style={styles.image} source={imagePathNight} />
            <Text style={styles.weatherInfo}>
              {props.weatherInfoNight}
              {" °F"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    // marginLeft: 10, // Adjust the margin between image and text
  },
  dayandnightContainer: {
    flex: 1,
  },
  dayContainer: {
    flex: 1,
    alignItems: "center",
    // marginBottom: 20, // Adjust the margin between "Day" and "Night"
    backgroundColor: "lemonchiffon", // Fix the property name here
  },
  nightContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "slateblue", // Fix the property name here
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    color: "gray",
    fontWeight: "bold",
  },
  daytext: {
    fontSize: 24,
    color: "orange",
    fontWeight: "bold",
  },
  nighttext: {
    fontSize: 24,
    color: "darkblue",
    fontWeight: "bold",
  },
  spaceBetween: {
    marginTop: 20, // Adjust the space between date and "Day" image
  },
  weatherInfoContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageAndInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  weatherInfo: {
    fontSize: 18,
    color: "coral", // Adjust the color as needed
    fontWeight: "bold",
    marginLeft: 10, // Adjust the margin between image and text
  },
});
