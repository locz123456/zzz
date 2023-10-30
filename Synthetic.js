import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import * as SMS from 'expo-sms';

export default function Synthetic() {
    const [sliderValue, setSliderValue] = useState(0);

    const onSliderValueChange = (value) => {
        setSliderValue(value);
    };

    const recipient = '0123456789'; // Số điện thoại của người nhận
    const message = 'Xin chào, đây là tin nhắn từ ứng dụng Expo SMS!';

    const sendSMS = async () => {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            await SMS.sendSMSAsync(recipient, message);
        } else {
            console.log('Tính năng gửi SMS không khả dụng trên thiết bị này.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Giá trị: {sliderValue.toFixed(2)}</Text>
            <Slider
                style={styles.slider}
                value={sliderValue}
                onValueChange={onSliderValueChange}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="pink" // Màu thanh trượt phía bên trái giá trị hiện tại
                maximumTrackTintColor="gray"
                thumbTintColor="pink"
            />
            <Text>{message}</Text>
            <Button title="Gửi SMS" onPress={sendSMS} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        width: 300,
    },
});