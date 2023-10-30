import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, SafeAreaView, FlatList, Image, ScrollView, StatusBar, PermissionsAndroid } from 'react-native';


export default function Map() {
    const [location, setLocation] = useState('Waiting..');
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(JSON.stringify(location));
        })();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Địa chỉ công ty BLUECO</Text>
            <Text>{location}</Text>
            <MapView style={{ width: '80%', height: 400 }}
                showsTraffic={true}
                showsBuildings={true}
                showsUserLocation={true}
                initialRegion={{
                    latitude: 21.0319593, // Thay thế bằng vị trí thực tế
                    longitude: 105.7831203, // Thay thế bằng vị trí thực tế
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 21.0319593, // Thay thế bằng vị trí thực tế
                        longitude: 105.7831203, // Thay thế bằng vị trí thực tế
                    }}
                />
            </MapView>
        </View >
    )
}