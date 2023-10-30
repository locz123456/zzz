import { Modal } from "react-native";
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function RegisterModal({ show, close }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleRegister = () => {
        // Thực hiện xử lý đăng nhập ở đây, sử dụng email và password
        console.log(`Logging in with email: ${email} and password: ${password}`);
    };

    return (
        <Modal
            visible={show}
            onRequestClose={close}
        >
            <View style={{ padding: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5, paddingBottom: 15 }}>
                    <Text style={{ fontSize: 35, fontWeight: 600, }}>ĐĂNG KÝ</Text>
                    <TouchableOpacity onPress={close}>
                        <Text style={{ paddingHorizontal: 5, paddingVertical: 3, borderRadius: 10, fontWeight: 700, fontSize: 15 }}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                    <TextInput
                        placeholder="Re-password"
                        style={styles.input}
                        onChangeText={(text) => setRePassword(text)}
                        value={rePassword}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    loginButton: {
        backgroundColor: 'pink',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginTop: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
})