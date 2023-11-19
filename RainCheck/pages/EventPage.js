import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import Header from "../components/Location/Header";
import { Events } from "../components/Events/Events";

export default function EventPage({
  cityName,
  events_data,
  handlePressOnIcon,
  onSwitchPage,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header
          currentCity={cityName}
          onIOSIconPress={handlePressOnIcon}
          onSwitchPage={onSwitchPage}
        />
      </View>
      <Events 
        events_data={events_data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center", // 中央揃えに変更
  },
  topContainer: {
    flex: 1,
    marginTop: 60,
    justifyContent: "flex-start",
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
