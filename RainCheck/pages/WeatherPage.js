import { SafeAreaView, View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Clothing from "../components/Clothes/Clothing";
import Suggestion from "../components/Clothes/Suggestion";
import Details from "../components/Details/Details";
import Header from "../components/Location/Header";

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
});

export const WeatherPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header />
      </View>
      <View style={styles.upperContainer}>
        <View style={[styles.box, { backgroundColor: "red" }]}>
          <Clothing />
          <Suggestion />
        </View>
        <View style={[styles.box, { backgroundColor: "green" }]} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={[styles.bottombox, { backgroundColor: "darkgray" }]}>
          <Details />
        </View>
        <View style={[styles.bottombox, { backgroundColor: "yellow" }]} />
      </View>
    </SafeAreaView>
  );
};
