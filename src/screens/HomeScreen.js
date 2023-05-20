import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from "react-native-vector-icons/AntDesign";
import { Stories } from '../components/Stories';
import { Posts } from '../components/Posts';
import { signOut } from 'firebase/auth';

export default HomeScreen = () => {
    const navigation = useNavigation();
    const [popular, setPopular] = useState(true);
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.background}>
            <View style={styles.main}>
                <View style={styles.container}>
                    <View style={styles.homeView}>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.logo}>
                                <AntDesign name='QQ' style={styles.logoIcon} /> fliv
                            </Text>
                        </View>
                        <View style={styles.content}>
                            <TouchableOpacity onPress={() => navigation.navigate('DM')}>
                                <Icon name='inbox' style={styles.iconStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.title}>Bugünün paylaşımlarına göz at.</Text>
                </View>
                <Stories />
            </View>
            <View style={styles.homePage}>
                <View style={styles.homePageTitleContainer}>
                    <TouchableOpacity onPress={() => setPopular(true)} style={popular ? styles.selected : styles.unselected}>
                        <Text style={popular ? styles.selectedText : styles.unselectedText}>En Popüler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPopular(false)} style={popular ? styles.unselected : styles.selected}>
                        <Text style={popular ? styles.unselectedText : styles.selectedText}>En Yeniler</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Posts
                        onPress={() => navigation.navigate('PostDetail')}
                        name='Yunus Emre Korkmaz'
                        profile={require('../images/profilePic.png')}
                        photo={require('../images/photo8.jpg')}
                        username='yeqq'
                    />
                </View>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    background: {
        height: '100%',
        backgroundColor: '#7FFFD4',
        flex: 1
    },
    main: {
        paddingBottom: 25
    },
    container: {
        height: 170,
        width: '100%',
        paddingHorizontal: 35
    },
    homeView: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
        alignItems: 'center'
    },
    content: {
        width: '50%',
        alignItems: 'flex-end'
    },
    iconStyle: {
        color: '#fff',
        fontSize: 25,
        marginRight: -7,
        marginTop: 7

    },
    logo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '900',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoIcon: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        paddingVertical: 15
    },
    homePage: {
        backgroundColor: '#f5f5f5',
        height: '100%',
        marginBottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 35
    },
    homePageTitleContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-evenly'
    },
    selected: {
        borderBottomColor: '#5cffc9',
        borderBottomWidth: 2,
        paddingVertical: 6,
        marginHorizontal: 30,
    },
    unselected: {
        paddingVertical: 6,
        marginHorizontal: 30
    },
    selectedText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#5cffc9',
    },
    unselectedText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#8D99AE',
    },
    posts: {
        height: 160,
        backgroundColor: '#3c636c',
        width: 20,
        marginLeft: 20,
        marginTop: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    }
});
