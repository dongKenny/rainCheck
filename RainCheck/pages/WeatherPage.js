import { SafeAreaView, View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import React, { useState } from 'react';
import Clothing from "../components/Clothes/Clothing";
import Toggle from "../components/Clothes/Toggle";
import Suggestion from "../components/Clothes/Suggestion";
import { Weather } from '../components/Weather/Weather';
import { WeatherToggle } from '../components/Weather/WeatherToggle';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    upperContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    upperContainer: {
        flexDirection: "row",
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
        fontWeight: 'bold',
        textAlign: 'center', // Center the text horizontally
        color: 'gray', // Adjust the color as needed
      },
});

export const WeatherPage = () => {
    const [isWeatherVisible, setIsWeatherVisible] = useState(true);

    const toggleWeather = () => {
      setIsWeatherVisible(!isWeatherVisible);
    };

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
            <View style={[styles.topbox, { backgroundColor: "white" }]} />
            </View>
            <View style={styles.upperContainer}>
                <View style={[styles.box, { backgroundColor: "red" }]} />
                <View style={[styles.box, { backgroundColor: 'green' }]}>
                    {isWeatherVisible ? (
                        <Weather
                        imagePathDay="sunny"
                        weatherInfoDay={'60F'}
                        imagePathNight="cloudyRain"
                        weatherInfoNight={'45F'}
                        />
                    ) : (
                        <WeatherToggle
                        imagePathDay="rain"
                        weatherInfoDay={'75F'}
                        imagePathNight="snow"
                        weatherInfoNight={'30F'}
                        />
                    )}
                    {/* button to select today or tomorrow */}
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: isWeatherVisible ? "lightgreen" : "lightblue" }]}
                        onPress={toggleWeather}
                    >
                        <Text style={styles.buttonText}>
                        {isWeatherVisible ? "Tomorrow" : "Today"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={[styles.bottombox, { backgroundColor: "darkgray" }]} />
                <View style={[styles.bottombox, { backgroundColor: "#FFF7CC" }]} />
            </View>
        </SafeAreaView>
    );
};


