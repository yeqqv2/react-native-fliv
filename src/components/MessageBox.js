import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

export const MessageBox = (props) => {
    const navigation = useNavigation();
    const { name, profile, message } = props
    return (
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <TouchableOpacity style={styles.background} onPress={() => navigation.navigate('MessageIn')}>
                <View style={styles.container}>
                    <Image
                        source={props.profile}
                        style={styles.img}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.username}>{props.name}</Text>
                        <Text style={styles.message}>{props.message}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    background: {
        height: 80,
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    textContainer: {
        marginHorizontal: 15
    },
    username: {
        fontSize: 16,
        fontWeight: '700'
    },
    message: {
        fontSize: 14,
    }
});