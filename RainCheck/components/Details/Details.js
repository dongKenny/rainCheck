import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Block from "./Block";

export default function Details( {isToday, today, tomorrow, aqi} ) {
  const detail = isToday ? today : tomorrow

  const detailInfo = {
    humidity: {
      imgSrc: require("../../assets/details/humid-icon.png"),
      value: detail['humidity'] * 100,
      measure: "%",
    },
    rainPercent: {
      imgSrc: require("../../assets/details/rainpercent-icon.png"),
      value: detail['rain'] * 100,
      measure: "%",
    },
    windSpeed: {
      imgSrc: require("../../assets/details/windspeed-icon.png"),
      value: detail['windSpeed'],
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
      {/* <Image source={require("../../assets/details/humidity-icon.png")} /> */}
      <Block weatherDetail={detailInfo.humidity} />
      <Block weatherDetail={detailInfo.rainPercent} />
      <Block weatherDetail={detailInfo.windSpeed} />
      <Block weatherDetail={detailInfo.aqi} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 5,
  },
});
