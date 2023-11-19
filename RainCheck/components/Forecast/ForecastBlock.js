import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Container } from '../Forecast/Container';
import { parseShortForecast } from "../../clothing_selection";

const getWeatherData = (viewMode, daily, weekly) => {
  const currentHour = new Date().getHours();
  // Assume you have a function to get weekly weather data and daily weather data
  if (viewMode === 'daily') {
    // Get daily weather data for the next 48 hours
    return Array.from({ length: 48 }, (_, index) => {
      const nextHour = new Date();
      nextHour.setHours(currentHour + index);
      
      return {
        day: nextHour.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
        formattedHour: `${nextHour.getHours().toString().padStart(2, '0')}:${'00'}`,
        imagePathWeather: parseShortForecast(daily[`${index}`]['shortForecast']),
        hourlyTemp: `${daily[`${index}`]['temperature']}°F`,
      };
    });
  } else if (viewMode === 'weekly') {
    // Get weekly weather data for the next 7 days
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setHours(0, 0, 0, 0); // Set time to the beginning of the day
    const daysInWeek = 7;

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    return Array.from({ length: daysInWeek }, (_, dayIndex) => {
      const nextDay = new Date(startOfWeek);
      nextDay.setDate(startOfWeek.getDate() + dayIndex);
    
      return {
        day: nextDay.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
        dayOfWeek: weekdays[nextDay.getDay()],
        imagePathWeather: parseShortForecast(weekly[`${dayIndex}`]['shortForecast']),
        dailyTemp: `${weekly[`${dayIndex}`]['temperature']}°F`,
      };
    });
  }
};

export const ForecastBlock = ( {hourlyForecast, weeklyForecast} ) => {
  const containerCount = 48; // Number of containers
  const [viewMode, setViewMode] = useState('daily'); // State to track the selected view mode
  const weatherData = getWeatherData(viewMode, hourlyForecast, weeklyForecast); // Assume you have a function to get hourly weather data

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <View style={styles.container}>

      {/* Daily and Weekly buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => toggleViewMode('daily')}
          style={[styles.toggleButton, viewMode === 'daily' && styles.activeButton]}
        >
          <Text style={[styles.toggleButtonText, viewMode === 'daily' && styles.activeButtonText]}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleViewMode('weekly')}
          style={[styles.toggleButton, viewMode === 'weekly' && styles.activeButton]}
        >
          <Text style={[styles.toggleButtonText, viewMode === 'weekly' && styles.activeButtonText]}>Weekly</Text>
        </TouchableOpacity>
      </View>

      {/* Left-side bar for daily, hourly, and temperature labels */}
      <View style={styles.leftBar}>
        <View style={styles.leftContainer}>
          {viewMode === 'daily' && (
            <>
              <Text style={styles.labelTextTop}>Day</Text>
              <Text style={styles.labelTextTop}>Hour</Text>
            </>
          )}
          {viewMode === 'weekly' && (
            <>
              <Text style={styles.labelTextTop}>Day</Text>
            </>
          )}
          <View style={styles.spaceBetween}></View>
          <Text style={styles.labelTextBottom}>Temp</Text>
        </View>
      </View>

  
  
      {/* Scroll view for weather data */}
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
        {weatherData.map((data, index) => (
          <Container key={index} {...data} viewMode={viewMode} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal layout
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center', // Align items vertically
    marginLeft: 2, // Add left margin for more space
  },
  labelTextTop: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center', // Center the text horizontally
  },
  labelTextBottom: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center', // Center the text horizontally
  },
  scrollContainer: {
    flexDirection: 'row', // Horizontal layout
  },
  leftBar: {
    width: 50, // Adjust the width as needed
    marginRight: 5, // Add right margin for spacing between bars
    backgroundColor: 'wheat', // Add a background color for visibility
  },
  spaceBetween: {
    height: 20, // Use remaining space in the container
  },
  toggleButton: {
    backgroundColor: 'thistle',
    padding: 5,
    borderRadius: 5,
    margin: 5,
    marginLeft: 15, // Add right margin for spacing between bars
    alignSelf: 'flex-start',
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});