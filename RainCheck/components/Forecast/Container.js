import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { getWeatherAsset } from "../Weather/Weather";

/**
 *
 * @param {
 *  day: nextHour (String)
 *  imagePathWeather: image path (String)
 *  hourlyTemp: info for the hourly Temp(String)
 *  formattedHour: nexthours (String)
 *  dayOfWeek: day of week (String)
 *  dailyTemp: daily temp for a week(String)
 * } props
 * @returns
 */

export const Container = (props) => {
  const today = new Date();
  const currentHour = today.getHours();
  const formattedHour = currentHour.toString().padStart(2, "0");

  let imagePathWeather = getWeatherAsset(props.imagePathWeather);

  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        {props.day && <Text style={styles.daytext}>{props.day}</Text>}
        {props.dayOfWeek && (
          <Text style={styles.dayOfWeektext}>{props.dayOfWeek}</Text>
        )}
        {props.formattedHour && (
          <Text style={styles.hourlytext}>{props.formattedHour}</Text>
        )}
        <View style={styles.imageAndInfoContainer}>
          <View style={styles.spaceBetween}></View>
          <Image style={styles.image} source={imagePathWeather} />

          <View style={styles.spaceBetween}></View>
          <Text style={styles.hourlyTemp}>{props.hourlyTemp}</Text>
          <Text style={styles.dailyTemp}>{props.dailyTemp}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Center items vertically
    marginHorizontal: 15, // Adjust spacing if needed
  },
  daytext: {
    fontSize: 12,
    color: "brown",
    fontWeight: "bold",
  },
  hourlytext: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  dayOfWeektext: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  image: {
    width: 20,
    height: 20,
  },
  hourlyTemp: {
    fontSize: 12,
    color: "black", // Adjust color as needed
  },
  dailyTemp: {
    fontSize: 12,
    color: "black", // Adjust color as needed
  },
  spaceBetween: {
    marginTop: 5,
  },
  weatherContainer: {
    alignItems: "center",
  },
  imageAndInfoContainer: {
    flexDirection: "column", // Change to column
    alignItems: "center",
  },
});
