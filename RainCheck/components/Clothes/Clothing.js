import { useState } from "react";
import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Toggle from "./Toggle";
import chooseClothes from "../../clothing_selection";

export default function Clothing( {dayData, nightData} ) {
  const [isDay, setIsDay] = useState(true);

  const day = {'temperature': dayData['temperature'], 'forecast': dayData['detailedForecast'], 'rain': dayData['rain']};
  const night = {'temperature': nightData['temperature'], 'forecast': nightData['detailedForecast'], 'rain': nightData['rain']};
  
  const dayClothes = chooseClothes(day);
  const nightClothes = chooseClothes(night);

  const switchDayAndNight = () => {
    setIsDay(!isDay);
  };

  const getHeadSource = (clothItem) => {
    switch (clothItem) {
      case "visor":
        return require(`../../assets/clothes/head/visor.png`);
      case "hat":
        return require(`../../assets/clothes/head/hat.png`);
      case "sunglasses":
        return require(`../../assets/clothes/head/sunglasses.png`);
      case "scarf":
        return require(`../../assets/clothes/head/scarf.png`);
      case "umbrella":
        return require(`../../assets/clothes/head/umbrella.png`);
      case "beanie":
        return require(`../../assets/clothes/head/beanie.png`);
      case "beanie_red":
        return require(`../../assets/clothes/head/beanie_red.png`);
    }
  };

  const getTopSource = (clothItem) => {
    switch (clothItem) {
      case "tshirt":
        return require(`../../assets/clothes/top/tshirt.png`);
      case "sweater":
        return require(`../../assets/clothes/top/sweater.png`);
      case "puffer":
        return require(`../../assets/clothes/top/puffer.png`);
      case "jacket":
        return require(`../../assets/clothes/top/jacket.png`);
      case "hoodie":
        return require(`../../assets/clothes/top/hoodie.png`);
      case "hawaii":
        return require(`../../assets/clothes/top/hawaii.png`);
    }
  };

  const getFeetSource = (clothItem) => {
    switch (clothItem) {
      case "sandals":
        return require(`../../assets/clothes/feet/sandals.png`);
      case "shoes":
        return require(`../../assets/clothes/feet/shoes.png`);
      case "feathershoes":
        return require(`../../assets/clothes/feet/feathershoes.png`);
      case "furboots":
        return require(`../../assets/clothes/feet/furboots.png`);
      case "rainboots":
        return require(`../../assets/clothes/feet/rainboots.png`);
    }
  };

  const getBottomSource = (clothItem) => {
    switch (clothItem) {
      case "skirt":
        return require(`../../assets/clothes/bottom/skirt.png`);
      case "jeans":
        return require(`../../assets/clothes/bottom/jeans.png`);
      case "khaki":
        return require(`../../assets/clothes/bottom/khaki.png`);
      case "shorts":
        return require(`../../assets/clothes/bottom/shorts.png`);
      case "trunks":
        return require(`../../assets/clothes/bottom/trunks.png`);
    }
  };

  return (
    <>
      <Toggle onPressButton={switchDayAndNight} currentTime={isDay} />
      <View style={styles.container}>
        <View style={styles.horicontainer}>
          <Image
            source={
              isDay
                ? getHeadSource(dayClothes['head'])
                : getHeadSource(nightClothes['head'])
            }
            style={styles.clothItem}
          />
          <Image
            source={
              isDay
                ? getTopSource(dayClothes['top'])
                : getTopSource(nightClothes['top'])
            }
            style={styles.clothItem}
          />
        </View>
        <View style={styles.horicontainer}>
          <Image
            source={
              isDay
                ? getFeetSource(dayClothes['shoes'])
                : getFeetSource(nightClothes['shoes'])
            }
            style={styles.clothItem}
          />
          <Image
            source={
              isDay
                ? getBottomSource(dayClothes['bottom'])
                : getBottomSource(nightClothes['bottom'])
            }
            style={styles.clothItem}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  horicontainer: {
    flexDirection: "row",
  },
  clothItem: {
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").width / 5,
    margin: 2,
  },
});
