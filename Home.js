import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, SafeAreaView, FlatList, Image, ScrollView, StatusBar, PermissionsAndroid } from 'react-native';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import CameraZ from './Camera';

export default function Home() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [showLogin, setShowLoginModal] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const { height } = Dimensions.get('window');

    const data = [
        { key: '1', img: require('./assets/loc.png') },
        { key: '2', img: require('./assets/loc.png') },
        { key: '3', img: require('./assets/loc.png') },
        { key: '4', img: require('./assets/loc.png') },
    ];

    const docCamera = async () => {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
            );
        } catch (err) {
            console.warn(err);
        }
    };

    const docViTri = async () => {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FI_NELOCATION,
            );
        } catch (err) {
            console.warn(err);
        }
    };

    const docDanhBa = async () => {
        try {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            );
        } catch (err) {
            console.warn(err);
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const openCamera = () => {
        setShowCamera(true);
    };

    const openRegisterModal = () => {
        setShowRegister(true);
    };

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageBackground source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2cELwhBJMtq_K-C1Kr6xwkmkrxcGrViitA&usqp=CAU' }}>
                    <View style={{ paddingTop: 50, padding: 20, }}>
                        <Text style={{ fontSize: 20, marginBottom: 30, fontWeight: 500 }}>Hôm nay bạn thế nào?</Text>
                        <View style={{ borderColor: 'black', borderWidth: 0.5, padding: 15, borderRadius: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>Hãy khám phá và trải nghiệm dịch vụ gia đình ngay hôm nay.</Text>
                            <TouchableOpacity onPress={toggleModal} style={styles.login}>
                                <Text style={{ fontWeight: 700, color: 'gray' }}>Đăng nhập / Tạo tài khoản</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingTop: 10 }} onPress={docCamera}><Text>Cấp quyền Camera</Text></TouchableOpacity>
                            <TouchableOpacity style={{ paddingTop: 10 }} onPress={docViTri}><Text>Cấp quyền vị trí</Text></TouchableOpacity>
                            <TouchableOpacity style={{ paddingTop: 10 }} onPress={docDanhBa}><Text>Cấp quyền danh ba</Text></TouchableOpacity>
                            <TouchableOpacity style={{ paddingTop: 10 }} onPress={openCamera}><Text>Mở Camera</Text></TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ paddingLeft: 15, paddingVertical: 15, }}>
                                    <Image
                                        source={item.img}
                                        style={{ width: 350, height: 200, borderRadius: 20 }}
                                    />
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.key}
                    />
                </View>

                <View style={{ padding: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>Dịch vụ</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View style={styles.column}><Text>x</Text></View>
                        <View style={styles.column}><Text>x</Text></View>
                        <View style={styles.column}><Text>x</Text></View>
                        <View style={styles.column}><Text>x</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                        <View style={styles.column}><Text>x</Text></View>
                        <View style={styles.column}><Text>x</Text></View>
                        <View style={styles.column}><Text>x</Text></View>  
                        <View style={styles.column}><Text>x</Text></View>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 700 }}>Khuyến mại</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ paddingLeft: 15, paddingVertical: 15, marginTop: 10 }}>
                                    <Image
                                        source={item.img}
                                        style={{ width: 200, height: 200, borderRadius: 20 }}
                                    />
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.key}
                    />
                </View>
                <View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={() => {
                            setModalVisible(!isModalVisible);
                        }}
                        style={styles.modal}
                    >
                        <View style={[styles.modalContainer]}>
                            <View style={{ backgroundColor: 'black', height: height * 0.6, width: '100%', opacity: 0.7 }}>
                                <Text style={{ display: 'none' }}>hidden</Text>
                            </View>
                            <View style={{ height: height * 0.4, backgroundColor: 'white', width: '100%', padding: 15, borderWidth: 0.5, zIndex: 100 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 600 }}>Đăng nhập / Đăng ký</Text>
                                    <TouchableOpacity onPress={toggleModal}>
                                        <Text style={{ paddingHorizontal: 5, paddingVertical: 3, borderRadius: 10 }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ borderBottomWidth: 0.5, marginTop: 10 }}>
                                    <TouchableOpacity
                                        style={{ marginTop: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                                        onPress={openLoginModal}
                                    >
                                        <Text style={{
                                            paddingHorizontal: 5,
                                            paddingVertical: 15,
                                            backgroundColor: 'pink',
                                            borderRadius: 10,
                                            textAlign: 'center',
                                            width: 250,
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}>Đăng nhập</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ marginTop: 10, marginBottom: 40, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                                        onPress={openRegisterModal}
                                    >
                                        <Text style={{
                                            paddingHorizontal: 5,
                                            paddingVertical: 15,
                                            borderRadius: 10,
                                            textAlign: 'center',
                                            width: 250,
                                            alignItems: 'center',
                                            display: 'flex',
                                            borderWidth: 0.5,
                                        }}>Đăng ký</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ marginTop: 10 }}>Đăng nhập bằng Google</Text>
                            </View>
                        </View>
                    </Modal>
                    <LoginModal show={showLogin} close={() => setShowLoginModal(false)} />
                    <RegisterModal show={showRegister} close={() => setShowRegister(false)} />
                    <CameraZ show={showCamera} close={() => setShowCamera(false)} />
                </View>
            </ScrollView >
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
    },
    login: {
        width: 180,
        marginTop: 10,
        padding: 15,
        borderWidth: 0.5,
        borderRadius: 10,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        borderBlockColor: 'gray',
    },
    modalContent: {
        width: '100%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    column: {
        flex: 1,
        height: 100,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'pink',
        borderRadius: 15
    },
    bottomMenu: {
        backgroundColor: 'blue', // Màu nền của menu
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});