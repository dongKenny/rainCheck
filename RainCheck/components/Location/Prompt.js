import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import WeatherAPI from '../../weatherAPI' // Adjust the import path as necessary

const ForecastPrompt = ({initialAddress, onAddressUpdate}) => {
  const [forecastData, setForecastData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userAddress, setUserAddress] = useState(initialAddress);
  const [tempAddress, setTempAddress] = useState(''); 

  const handleForecastFetch = (data) => {
    setForecastData(data);
  };

  const handleAddressSubmit = () => {
    setUserAddress(tempAddress);
    onAddressUpdate(tempAddress);
    setModalVisible(false);
  };

  return (
    <View>
      <Button title="Enter Address" onPress={() => setModalVisible(true)} />
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ marginTop: 50, marginHorizontal: 20, backgroundColor: 'white', padding: 20 }}>
          <Text>Enter Address:</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setTempAddress}
            value={tempAddress}
          />
          <Button title="Submit" onPress={handleAddressSubmit}/>
        </View>
      </Modal>

      {userAddress && <WeatherAPI address={userAddress} onForecastFetch={handleForecastFetch} />}
      {/* Rest of your component */}
    </View>
  );
};

export default ForecastPrompt;