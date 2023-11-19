import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import { WeatherPage } from '../../pages/WeatherPage';


/**
 * 
 * @param {
 *  imagePathDay: image path (String)
 *  WeatherInfoDay: info for the average weather(String)
 *  imagePathNight: image path (String)
 *  imagePathNight: image path (String)
 *  WeatherInfoNight: info for the average weather(String)
 * } props 
 * @returns 
 */


export const WeatherToggle = (props) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const formattedDate = tomorrow.toLocaleDateString();


  let imagePathDay;
  switch (props.imagePathDay) {
    case 'cloudy':
      imagePathDay = require('../../assets/weather/cloud.png');
      break;
    case 'cloudyRain':
      imagePathDay = require('../../assets/weather/cloudyRain.png');
      break;
    case 'sunny':
      imagePathDay = require('../../assets/weather/sunny.png');
      break;
    case 'snow':
        imagePathDay = require('../../assets/weather/snow.png');
        break;
    case 'storm':
        imagePathDay = require('../../assets/weather/snow.png');
        break;
    case 'clearNight':
        imagePathDay = require('../../assets/weather/clearNight.png');
        break;
    case 'heavyRain':
        imagePathDay = require('../../assets/weather/heavyRain.png');
        break;
    case 'rain':
        imagePathDay = require('../../assets/weather/rain.png');
        break;
    case 'typhoon':
        imagePathDay = require('../../assets/weather/typhoon.png');
        break;
    default:
      // No default case
      break;
  }

  let imagePathNight;
  switch (props.imagePathNight) {
    case 'cloudy':
        imagePathNight = require('../../assets/weather/cloud.png');
        break;
    case 'cloudyRain':
        imagePathNight = require('../../assets/weather/cloudyRain.png');
        break;
    case 'sunny':
        imagePathNight = require('../../assets/weather/sunny.png');
        break;
    case 'snow':
        imagePathNight = require('../../assets/weather/snow.png');
        break;
    case 'storm':
        imagePathNight = require('../../assets/weather/snow.png');
        break;
    case 'clearNight':
        imagePathNight = require('../../assets/weather/clearNight.png');
        break;
    case 'heavyRain':
        imagePathNight = require('../../assets/weather/heavyRain.png');
        break;
    case 'rain':
        imagePathNight = require('../../assets/weather/rain.png');
        break;
    case 'typhoon':
        imagePathNight = require('../../assets/weather/typhoon.png');
        break;
    default:
      // No default case
      break;
  }

    return (
    <View style={styles.container}>
      <View style={styles.spaceBetween}></View>
        <Text style={styles.text}>{formattedDate}</Text>

        <View style={styles.spaceBetween}></View>
      <View style={styles.dayContainer}>
        <Text style={styles.daytext}>{"Day"}</Text>
        <View style={styles.imageAndInfoContainer}>
          <Image
            style={styles.image}
            source={imagePathDay}
          />
          <Text style={styles.weatherInfo}>{props.weatherInfoDay}</Text>
        </View>
      </View>
      <View style={styles.nightContainer}>
        <Text style={styles.nighttext}>{"Night"}</Text>
        <View style={styles.imageAndInfoContainer}>
          <Image
            style={styles.image}
            source={imagePathNight}
          />
          <Text style={styles.weatherInfo}>{props.weatherInfoNight}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 10, // Adjust the margin between image and text
  },
  dayContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adjust the margin between "Day" and "Night"
  },
  nightContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 24,
    color: 'lightblue',
    fontWeight: 'bold',
  },
  daytext: {
    fontSize: 24,
    color: 'pink',
    fontWeight: 'bold',
  },
  nighttext: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  spaceBetween: {
    marginTop: 20, // Adjust the space between date and "Day" image
  },
  weatherInfoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageAndInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherInfo: {
    fontSize: 18,
    color: 'white', // Adjust the color as needed
    fontWeight: 'bold',
    marginLeft: 10, // Adjust the margin between image and text
  },
});