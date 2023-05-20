import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default Login = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.titleContain}>
                        <Text style={styles.title}>Fliv </Text>
                        <Text style={styles.loginText}>| Kaydol</Text>
                    </View>
                    <View style={styles.login}>
                        <View style={styles.inputGroup}>
                            <TextInput
                                value={name}
                                onChangeText={(name) => setName(name)}
                                placeholder="Ad Soyad"
                                style={styles.input}
                            />
                            <TextInput
                                value={username}
                                onChangeText={(username) => setUsername(username)}
                                placeholder="Kullanıcı adı"
                                style={styles.input}
                            />
                            <TextInput
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                                placeholder="Email"
                                style={styles.input}
                            />
                            <TextInput
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                                secureTextEntry={true}
                                placeholder="Şifre"
                                style={styles.input}
                            />
                            <TouchableOpacity style={styles.buttonActive} disabled={!email || !password || !username || !name}>
                                <Text style={styles.buttonText}>Kaydol</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.register}>
                <Text style={styles.registerText}>Zaten hesabınız var mı?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#333'
    },
    container: {
        backgroundColor: '#f3f3f3',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        marginLeft: 20
    },
    titleContain: {
        flexDirection: 'row',
        backgroundColor: '#7FFFD4',
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
    },
    login: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 30
    },
    loginText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        marginBottom: 30,
    },
    input: {
        height: 40,
        marginVertical: 30,
        width: '85%',
        borderBottomWidth: .5
    },
    inputGroup: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'flex-end'
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#f3f3f3",
        marginBottom: 30,
    },
    buttonActive: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 32,
        elevation: 3,
        backgroundColor: '#333',
        textColor: 'white'
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    register: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20,
        borderBottomLeftRadius: 20,
        right: 0
    },
    registerText: {
        color: 'white',
        marginHorizontal: 20
    }
});
