/**This component is used to show users the location and let them change */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headbox}></View>
      <View style={styles.headbox}>
        <Text style={styles.text}>San Francisco</Text>
      </View>
      <View
        style={[
          styles.headbox,
          { flexDirection: "row", justifyContent: "flex-end" },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            console.log("Change Location");
          }}
        >
          <Ionicons name="ios-menu" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: "black",
    width: Dimensions.get("window").width,
    // backgroundColor: "red",
  },
  headbox: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});
