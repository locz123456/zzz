import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Video, ResizeMode, Audio } from 'expo-av';

export default function VideoZ() {
    const [video, setVideo] = useState(null);
    const videoUri = 'https://example.com/your-video.mp4'; // Đặt URL của video tại đây

    async function loadVideo() {
        const video = new Video.Sound();
        const source = { uri: videoUri }; // Sử dụng đối tượng source với URL của video
        const status = {
            shouldPlay: true,
        };
        video.loadAsync(source, status, false);
        setVideo(video);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Phát video từ mạng</Text>
            <Button title="Phát" onPress={loadVideo} />
            {video && <Video ref={video} style={{ width: 300, height: 200 }} />}
        </View>
    );
}