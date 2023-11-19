import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

/**
 * 
 * @param {
 *  day: nextHour (String)
 *  imagePathWeather: image path (String)
 *  hourlyTemp: info for the hourly Temp(String)
 *  formattedHour: nexthours (String)
 *  dayOfWeek: day of week (String)
 *  dailyTemp: daily temp for a week(String)
 * } props 
 * @returns 
 */


export const Container = (props) => {  
  const today = new Date();
  const currentHour = today.getHours();
  const formattedHour = currentHour.toString().padStart(2, '0');


  let imagePathWeather;
  switch (props.imagePathWeather) {
    case 'cloudy':
        imagePathWeather = require('../../assets/weather/cloud.png');
      break;
    case 'cloudyRain':
        imagePathWeather = require('../../assets/weather/cloudyRain.png');
      break;
    case 'sunny':
        imagePathWeather = require('../../assets/weather/sunny.png');
      break;
    case 'snow':
        imagePathWeather = require('../../assets/weather/snow.png');
        break;
    case 'storm':
        imagePathWeather = require('../../assets/weather/snow.png');
        break;
    case 'clearNight':
        imagePathWeather = require('../../assets/weather/clearNight.png');
        break;
    case 'heavyRain':
        imagePathWeather = require('../../assets/weather/heavyRain.png');
        break;
    case 'rain':
        imagePathWeather = require('../../assets/weather/rain.png');
        break;
    case 'typhoon':
        imagePathWeather = require('../../assets/weather/typhoon.png');
        break;
        // ... (existing cases)
    default:
        console.log('No matching image path:', props.imagePathWeather);
        break;
    
  }


  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        {props.day && <Text style={styles.daytext}>{props.day}</Text>}
        {props.dayOfWeek && <Text style={styles.daytext}>{props.dayOfWeek}</Text>}
        {props.formattedHour && <Text style={styles.text}>{props.formattedHour}</Text>}
        <View style={styles.imageAndInfoContainer}>
        <View style={styles.spaceBetween}></View>
          <Image style={styles.image} source={imagePathWeather} />
          <Text style={styles.hourlyTemp}>{props.hourlyTemp}</Text>
          <Text style={styles.dailyTemp}>{props.dailyTemp}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center items vertically
    marginHorizontal: 15, // Adjust spacing if needed
  },
  daytext: {
    fontSize: 10,
    color: 'brown',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    width: 20,
    height: 20,
  },
  hourlyTemp: {
    fontSize: 10,
    color: 'black', // Adjust color as needed
  },
  spaceBetween: {
    marginTop: 5,
  },
  weatherContainer: {
    alignItems: 'center',
  },
  imageAndInfoContainer: {
    flexDirection: 'column', // Change to column
    alignItems: 'center',
  },
});
