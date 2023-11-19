import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Block from "./Block";

export default function Details() {
  const detailInfo = {
    humidity: {
      imgSrc: require("../../assets/details/humid-icon.png"),
      value: 70,
      measure: "%",
    },
    rainPercent: {
      imgSrc: require("../../assets/details/rainpercent-icon.png"),
      value: 30,
      measure: "%",
    },
    windSpeed: {
      imgSrc: require("../../assets/details/windspeed-icon.png"),
      value: 13,
      measure: "mph",
    },
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/details/humidity-icon.png")} /> */}
      <Block wheatherDetail={detailInfo.humidity} />
      <Block wheatherDetail={detailInfo.rainPercent} />
      <Block wheatherDetail={detailInfo.windSpeed} />
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
