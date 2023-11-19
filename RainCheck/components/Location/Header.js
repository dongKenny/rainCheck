/**This component is used to show users the location and let them change */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo

export default function Header({ currentCity, onIOSIconPress, onSwitchPage }) {
  return (
    <View style={styles.container}>
      <View style={styles.headbox}>
        <Button title="Events" onPress={onSwitchPage} />
      </View>
      <View style={styles.headbox}>
        <Text style={styles.text}>{currentCity}</Text>
      </View>
      <View
        style={[
          styles.headbox,
          { flexDirection: "row", justifyContent: "flex-end" },
        ]}
      >
        <TouchableOpacity onPress={onIOSIconPress}>
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
    justifyContent: "flex-start",
  },
  text: {
    fontSize: 20,
  },
});
