import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Comment } from './Comment';


export const Posts = (props) => {
    const { name, profile, profilePic, username } = props
    const navigation = useNavigation();
    const [liked, setLiked] = useState(false)
    isLiked = () => {
        setLiked(!liked)
    }
    return (
        <View>
            <View style={styles.fullPost}>
                <View style={styles.postContainer}>
                    <View style={{ width: '12%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Image source={props.profile} style={styles.profilePic} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '68%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.name}>{name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <Icon name='ellipsis-v' size={20} />
                    </View>
                </View>
                <View style={styles.postContain}>
                    <View style={styles.postContent}>
                        <ImageBackground source={props.photo} style={styles.post} imageStyle={styles.postPhoto}>
                            <View style={styles.iconsGroup}>
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={isLiked} style={styles.postIcon}>
                                        <Icon name={!liked ? 'heart' : 'heart-o'} style={liked ? styles.icon : styles.liked} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.postIcon}>
                                        <Icon name='comment-o' size={20} color='#fff' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.postIcon}>
                                        <Icon name='send' size={20} color='#fff' />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.postIcon}>
                                    <Icon name='bookmark-o' size={20} color='#fff' />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={styles.myComment}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                <Text style={styles.name}>{props.username}</Text>
                            </TouchableOpacity>
                            <Text style={styles.description}>Fake it until you make it!</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Comment')}>
                            <Text>3 yorumun tümünü gör</Text>
                        </TouchableOpacity>
                        <Text style={styles.postTime}>2 dk önce</Text>
                    </View>
                </View>
            </View>
            <View style={styles.fullPost}>
                <View style={styles.postContainer}>
                    <View style={{ width: '12%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Image source={props.profile} style={styles.profilePic} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '68%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.name}>{name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <Icon name='ellipsis-v' size={20} />
                    </View>
                </View>
                <View style={styles.postContain}>
                    <View style={styles.postContent}>
                        <ImageBackground source={props.photo} style={styles.post} imageStyle={styles.postPhoto}>
                            <View style={styles.iconsGroup}>
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={isLiked} style={styles.postIcon}>
                                        <Icon name={!liked ? 'heart' : 'heart-o'} style={liked ? styles.icon : styles.liked} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.postIcon}>
                                        <Icon name='comment-o' size={20} color='#fff' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.postIcon}>
                                        <Icon name='send' size={20} color='#fff' />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.postIcon}>
                                    <Icon name='bookmark-o' size={20} color='#fff' />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={styles.myComment}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                <Text style={styles.name}>{props.username}</Text>
                            </TouchableOpacity>
                            <Text style={styles.description}>Fake it until you make it!</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Comment')}>
                            <Text>3 yorumun tümünü gör</Text>
                        </TouchableOpacity>
                        <Text style={styles.postTime}>2 dk önce</Text>
                    </View>
                </View>
            </View>
            <View style={styles.fullPost}>
                <View style={styles.postContainer}>
                    <View style={{ width: '12%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Image source={props.profile} style={styles.profilePic} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '68%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.name}>{name}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <Icon name='ellipsis-v' size={20} />
                    </View>
                </View>
                <View style={styles.postContain}>
                    <View style={styles.postContent}>
                        <ImageBackground source={props.photo} style={styles.post} imageStyle={styles.postPhoto}>
                            <View style={styles.iconsGroup}>
                                <View style={styles.icons}>
                                    <TouchableOpacity onPress={isLiked} style={styles.postIcon}>
                                        <Icon name={!liked ? 'heart' : 'heart-o'} style={liked ? styles.icon : styles.liked} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.postIcon}>
                                        <Icon name='comment-o' size={20} color='#fff' />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.postIcon}>
                                        <Icon name='send' size={20} color='#fff' />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.postIcon}>
                                    <Icon name='bookmark-o' size={20} color='#fff' />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={styles.myComment}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                <Text style={styles.name}>{props.username}</Text>
                            </TouchableOpacity>
                            <Text style={styles.description}>Fake it until you make it!</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Comment')}>
                            <Text>3 yorumun tümünü gör</Text>
                        </TouchableOpacity>
                        <Text style={styles.postTime}>2 dk önce</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    fullPost: {
        borderBottomColor: '#ced4da',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    postContainer: {
        flexDirection: 'row',
        paddingTop: 25,
        alignItems: 'center'
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 45
    },
    text: {
        fontSize: 14,
        color: '#8d99ae'
    },
    name: {
        fontSize: 14,
        fontWeight: '900'
    },
    postTime: {
        fontSize: 12,
        fontWeight: '400'
    },
    options: {
        width: '20%',
        alignItems: 'flex-end'
    },
    postContain: {
        flexDirection: 'column',
        margin: 5,
        paddingBottom: 10
    },
    postContent: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 10,
    },
    post: {
        width: '100%',
        height: 300,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    postPhoto: {
        resizeMode: 'cover',
    },
    icons: {
        width: '100%',
        flexDirection: 'row',
    },
    iconsGroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    myComment: {
        flexDirection: 'row',
        marginVertical: 5
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10
    },
    postIcon: {
        margin: 8,
        fontWeight: '900'
    },
    icon: {
        fontSize: 22,
        fontWeight: '900',
        color: 'white'
    },
    liked: {
        fontSize: 22,
        fontWeight: '900',
        color: 'tomato'
    }
})
