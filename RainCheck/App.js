import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherPage} from './pages/WeatherPage'
import ForecastPrompt from './components/Location/Prompt';
import WeatherAPI from './weatherAPI'; 

export default function App() {
  const [currentAddress, setCurrentAddress] = useState('');
  const [forecastData, setForecastData] = useState(null);
  const [currentCity, setCurrentCity] = useState(null);

  useEffect(() => {
   if (!currentAddress) {
      setCurrentAddress(null);
    }
  }, []);

  const handleForecastFetch = (forecast, city) => {
    setForecastData(forecast);
    setCurrentCity(city); 
  };

  return (
    <View style={styles.container}>
      {currentAddress === null ? (
        <ForecastPrompt
          initialAddress={currentAddress}
          onAddressUpdate={setCurrentAddress}
        />
      ) : (
        <>
          <WeatherAPI 
            address={currentAddress}
            onForecastFetch={handleForecastFetch} // Pass the function to update forecastData
          />
          <WeatherPage />
          <StatusBar style="auto" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
