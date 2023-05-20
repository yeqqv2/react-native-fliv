import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export const MessageIn = () => {
    const navigation = useNavigation();
    const [message, setMessage] = useState('')
    return (
        <View style={styles.background}>
            <View style={styles.background}>
                <View style={styles.container}>
                    <View style={styles.navbar}>
                        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()} >
                            <Icon name='chevron-left' size={24} />
                        </TouchableOpacity>
                        <View style={styles.userContainer}>
                            <Image
                                source={require('../images/profilePic.png')}
                                style={styles.img}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.username}>yeqq</Text>
                                <Text style={styles.online}>3 dk önce aktifti</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.icon}>
                            <Icon name='ellipsis-v' size={24} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.messageScreen}>

                    </ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Bir mesaj yazın..'
                            style={styles.input}
                            onChangeText={setMessage}
                            value={message}
                        />
                        <TouchableOpacity>
                            <Icon name='send' size={22} color={'aquamarine'} style={styles.send} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    navbar: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        justifyContent: 'space-around',
        paddingBottom: 20
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    textContainer: {
        marginHorizontal: 15
    },
    username: {
        fontSize: 14,
        fontWeight: '700'
    },
    online: {
        fontSize: 12,
    },
    icon: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    messageScreen: {
        height: '80%',
        width: '100%',
        backgroundColor: 'red'
    },
    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: '80%',
        marginVertical: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 15
    },
    send: {
        position: 'absolute',
        top: 30,
        right: 15
    }
});