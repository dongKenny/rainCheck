import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

export default function Block({ weatherDetail }) {
  return (
    <View style={styles.blockcontainer}>
      <Image source={weatherDetail.imgSrc} style={styles.detailItem} />
      <View style={styles.textbox}>
        <Text style={{ marginHorizontal: 5, fontSize: 15 }}>
          {weatherDetail.value}
        </Text>
        <Text style={{ marginHorizontal: 5, fontSize: 18, fontWeight: "bold" }}>
          {weatherDetail.measure}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blockcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    borderColor: "black",
    // backgroundColor: "red",
    padding: 10,
    marginLeft: 10,
  },
  detailItem: {
    width: Dimensions.get("window").width / 16,
    height: Dimensions.get("window").width / 16,
  },
  textbox: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
