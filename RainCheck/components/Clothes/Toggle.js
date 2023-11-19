import { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default function Toggle({ onPressButton, currentTime }) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.buttoncontainer,
          { backgroundColor: currentTime ? "hotpink" : "aliceblue" },
        ]}
      >
        <Button
          title="Day"
          onPress={() => {
            !currentTime && onPressButton();
          }}
          color={"darkblue"}
          style={styles.button}
        />
      </View>
      <View
        style={[
          styles.buttoncontainer,
          { backgroundColor: currentTime ? "aliceblue" : "hotpink" },
        ]}
      >
        <Button
          title="Night"
          onPress={() => {
            currentTime && onPressButton();
          }}
          color={"darkblue"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttoncontainer: {
    // borderWidth: 1,
    borderRadius: 5,
    // borderColor: "black",
    // backgroundColor: "aliceblue",
    width: 60,
  },
});
