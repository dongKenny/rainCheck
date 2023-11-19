import { Text, Button, View, StyleSheet } from "react-native";

export default function Suggestion() {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Suggestions: </Text>
      <View style={[styles.suggestioncontainer]}>
        <Text style={styles.textstyle}>
          It's very hot at daytime, but at night the temparature drops.{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    color: "white",
    marginLeft: 15,
  },
  textstyle: {
    color: "darkblue",
  },
  suggestioncontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "darkblue",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 6,
  },
});
