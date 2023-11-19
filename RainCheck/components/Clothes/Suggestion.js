import { Text, Button, View, StyleSheet } from "react-native";

export default function Suggestion( {detailedForecast} ) {
  return (
    <View style={styles.container}>
      <View style={[styles.suggestioncontainer]}>
        <Text style={styles.textstyle}>
          {detailedForecast}
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
    fontSize: 12
  },
  suggestioncontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "darkblue",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    marginRight: 1,
    padding: 6,
  },
});
