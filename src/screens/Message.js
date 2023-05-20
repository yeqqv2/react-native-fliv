import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MessageBox } from '../components/MessageBox';


export const Message = () => {
    const navigation = useNavigation();
    const [input, setInput] = useState('')
    return (
        <ScrollView style={styles.background}>
            <View style={styles.container}>
                <View style={styles.icons}>
                    <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')} >
                        <Icon name='chevron-left' size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Icon name='ellipsis-v' size={24} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '80%' }}>
                    <TextInput
                        placeholder='Bir mesaj arayın..'
                        style={styles.input}
                        onChangeText={setInput}
                        value={input}
                    />
                    <Text style={styles.text}>Mesajlar</Text>
                    <MessageBox
                        name='yeqq'
                        profile={require('../images/profilePic.png')}
                        message='selam naber'
                    />
                    <MessageBox
                        name='selim'
                        profile={require('../images/profilePic2.jpg')}
                        message='hahahahhah'
                    />
                    <MessageBox
                        name='1yunusewre'
                        profile={require('../images/1.jpg')}
                        message='aynen'
                    />
                    <MessageBox
                        name='username2'
                        profile={require('../images/2.jpg')}
                        message='merhaba'
                    />
                    <MessageBox
                        name='yeqq'
                        profile={require('../images/3.jpg')}
                        message='selam naber'
                    />
                    <MessageBox
                        name='yeqq'
                        profile={require('../images/4.jpg')}
                        message='selam naber'
                    />
                    <MessageBox
                        name='yeqq'
                        profile={require('../images/5.jpg')}
                        message='selam naber'
                    />
                    <MessageBox
                        name='yeqq'
                        profile={require('../images/photo1.png')}
                        message='selam naber'
                    />
                    <MessageBox
                        name='yeqq'
                        profile={require('../images/photo4.png')}
                        message='selam naber'
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f3f3f3',
        width: '100%',
        flex: 1
    },
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    icon: {
        alignItems: 'flex-end',
        marginHorizontal: 35
    },
    input: {
        height: 40,
        marginVertical: 30,
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 15
    },

    text: {
        fontSize: 25,
        fontWeight: '700',
        color: 'aquamarine',
        paddingBottom: 15,
        borderBottomWidth: .5
    }
})