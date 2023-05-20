import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.titleContain}>
                        <Text style={styles.title}>Fliv </Text>
                        <Text style={styles.loginText}>| Giriş Yap</Text>
                    </View>
                    <View style={styles.login}>
                        <View style={styles.inputGroup}>
                            <TextInput
                                placeholder="Email"
                                style={styles.input}
                                value={email}
                                onChange={setEmail}
                            />
                            <TextInput
                                secureTextEntry={true}
                                placeholder="Şifre"
                                style={styles.input}
                                value={password}
                                onChange={setPassword}
                            />
                            <TouchableOpacity style={styles.buttonActive} disabled={!email || !password}>
                                <Text style={styles.buttonText}>Giriş Yap</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.register}>
                <Text style={styles.registerText}>Hesabınız yok mu?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>Kaydol</Text>
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
        backgroundColor: '#7FFFD4'
    },
    container: {
        backgroundColor: '#f3f3f3',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        marginRight: 20
    },
    titleContain: {
        flexDirection: 'row',
        backgroundColor: '#333',
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    content: {
    },
    login: {
        justifyContent: 'flex-start',
        marginLeft: 30
    },
    loginText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#f3f3f3",
        marginBottom: 30,
    },
    input: {
        height: 40,
        width: 100,
        marginVertical: 30,
        width: '85%',
        borderBottomWidth: .5
    },
    inputGroup: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'baseline'
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#7FFFD4",
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
        width: '60%',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#333',
        borderBottomRightRadius: 20,
    },
    registerText: {
        color: 'white',
    }
});
