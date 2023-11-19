import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

export default function EventPage() {
  return (
    <View style={styles.container}>
      <Text>Event suggesions are coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blockcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
