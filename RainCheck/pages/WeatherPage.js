import { SafeAreaView, View, StyleSheet } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center", // 中央揃えに変更
    },
    upperContainer: {
        flexDirection: "row",
        alignItems: "center", // 中央揃えに変更
    },
    upperContainer: {
        flexDirection: "row",
    },
    topbox: {
        width: 200,
        height: 100,
    },
    box: {
        width: 200,
        height: 400,
    },
    bottombox: {
        width: 400,
        height: 200,
    },
    bottomContainer: {
        marginTop: 20, // 上部との余白を設定
        alignItems: "center",
    },
});

export const WeatherPage = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
            <View style={[styles.topbox, { backgroundColor: "white" }]} />
            </View>
            <View style={styles.upperContainer}>
                <View style={[styles.box, { backgroundColor: "red" }]} />
                <View style={[styles.box, { backgroundColor: "green" }]} />
            </View>
            <View style={styles.bottomContainer}>
                <View style={[styles.bottombox, { backgroundColor: "yellow" }]} />
            </View>
        </SafeAreaView>
    );
};
