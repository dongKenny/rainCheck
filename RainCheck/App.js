import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WeatherPage} from './pages/WeatherPage'
import ForecastPrompt from './components/Location/Prompt';

export default function App() {
  const [currentAddress, setCurrentAddress] = useState('');

  useEffect(() => {
   if (!currentAddress) {
      setCurrentAddress(null);
    }
  }, []);

  return (
    <View style={styles.container}>
      {currentAddress === null ? (
        <ForecastPrompt
          initialAddress={currentAddress}
          onAddressUpdate={setCurrentAddress}
        />
      ) : (
        <>
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
