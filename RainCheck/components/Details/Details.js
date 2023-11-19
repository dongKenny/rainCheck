import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Block from "./Block";

export default function Details({ isToday, today, tomorrow, aqi }) {
  const detail = isToday ? today : tomorrow;

  const detailInfo = {
    humidity: {
      imgSrc: require("../../assets/details/humid-icon.png"),
      value: detail["humidity"] * 100,
      measure: "%",
    },
    rainPercent: {
      imgSrc: require("../../assets/details/rainpercent-icon.png"),
      value: detail["rain"] * 100,
      measure: "%",
    },
    windSpeed: {
      imgSrc: require("../../assets/details/windspeed-icon.png"),
      value: detail["windSpeed"],
      measure: "mph",
    },
    aqi: {
      imgSrc: require("../../assets/details/aqi-icon.png"),
      value: aqi,
      measure: "AQI",
    },
  };


  return (
    <View style={styles.container}>
      <View style={styles.detailItem}>
        <Block weatherDetail={detailInfo.humidity} />
      </View>
      <View style={styles.separator} />
      <View style={styles.detailItem}>
        <Block weatherDetail={detailInfo.rainPercent} />
      </View>
      <View style={styles.separator} />
      <View style={styles.detailItem}>
        <Block weatherDetail={detailInfo.windSpeed} />
      </View>
      <View style={styles.separator} />
      <View style={styles.detailItem}>
        <Block weatherDetail={detailInfo.aqi} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 10,
    backgroundColor: "#EDE7F6", // Light violet background color
  },
  detailItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingLeft: 14,
    flex: 1, // Adjust the flex property for equal distribution
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#9575CD', // Darker violet for the separator line
  },
});