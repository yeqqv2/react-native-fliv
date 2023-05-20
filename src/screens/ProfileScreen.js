import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Posts } from '../components/Posts';

export default ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.background}>
            <View >
                <View style={styles.myProfile}>
                    <View style={{ paddingBottom: 50 }}>
                        <View style={styles.profileItems}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ width: '50%' }}>
                                <Icon name='chevron-left' size={24} />
                            </TouchableOpacity>
                            <View style={styles.otherProfileItems}>
                                <Icon name='ellipsis-v' size={24} />
                            </View>
                        </View>
                        <Image
                            source={(require('../images/profilePic.png'))}
                            style={styles.profilePic}
                        />
                        <Text style={styles.userName}>
                            Yunus Emre Korkmaz
                        </Text>
                        <Text style={styles.location}>
                            <Icon name='map-marker' /> Istanbul, Turkiye
                        </Text>
                        <View style={styles.userInfoContainer}>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={styles.userInfoNumber}>
                                    280
                                </Text>
                                <Text style={styles.userInfos}>
                                    Gönderiler
                                </Text>
                            </View>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={styles.userInfoNumber}>
                                    1,888
                                </Text>
                                <Text style={styles.userInfos}>
                                    Takipçiler
                                </Text>
                            </View>
                            <View style={{ marginHorizontal: 20 }}>
                                <Text style={styles.userInfoNumber}>
                                    888
                                </Text>
                                <Text style={styles.userInfos}>
                                    Takip Ettikleri
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.posts}>
                        <View style={{ flexDirection: 'row' }}>
                            <Posts
                                onPress={() => navigation.navigate('PostDetail')}
                                name='Yunus Emre Korkmaz'
                                profile={require('../images/profilePic.png')}
                                photo={require('../images/photo8.jpg')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f3f3f3',
        height: '100%',
        width: '100%',
        flex: 1
    },
    myProfile: {
        paddingHorizontal: 35,
        paddingBottom: 50,
        backgroundColor: '#7FFFD4',
        height: '47%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    profileItems: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20
    },
    otherProfileItems: {
        width: '50%',
        alignItems: 'flex-end'
    },
    profilePic: {
        height: 150,
        width: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginVertical: 20
    },
    userName: {
        fontSize: 22,
        fontWeight: '900',
        color: '#2b2d42',
        alignSelf: 'center'
    },
    location: {
        fontSize: 16,
        color: '#494c6f',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 30
    },
    userInfoNumber: {
        fontWeight: '800',
        fontSize: 15,
        color: '2b2d42',
        alignSelf: 'center'
    },
    userInfos: {
        fontSize: 16,
        color: '#494c6f',
        alignSelf: 'center',
    },
    posts: {
        height: '100%'
    }
});
