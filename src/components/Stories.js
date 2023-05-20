import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Stories = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.storyContainer}>
                <View style={styles.storyContent}>
                    <View style={[styles.myStory, styles.storyProfile]}>
                        <Image source={require('../images/profilePic.png')} style={styles.profilePicActive} />
                        <View style={styles.storyIcon}>
                            <Icon name='plus'
                                size={15}
                                color='#fff' />
                        </View>
                    </View>
                    <Text style={{ color: '#fff' }}>Hikayen</Text>
                </View>
                <View style={styles.storyContent}>
                    <View style={styles.storyProfile}>
                        <Image source={{ uri: 'https://static.wikia.nocookie.net/callofduty/images/1/18/SimonRiley_Mobile.jpg/revision/latest?cb=20191005151053' }} style={styles.profilePicActive} />
                    </View>
                    <Text style={{ color: '#fff' }}>Hikayen</Text>
                </View>
                <View style={styles.storyContent}>
                    <View style={styles.storyProfile}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' }} style={styles.profilePicActive} />
                    </View>
                    <Text style={{ color: '#fff' }}>Hikayen</Text>
                </View>
                <View style={styles.storyContent}>
                    <View style={styles.storyProfile}>
                        <Image source={{ uri: 'https://marketplace.canva.com/EAFEits4-uw/1/0/400w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-Pk-dGK9pdQg.jpg' }} style={styles.profilePicPassive} />
                    </View>
                    <Text style={{ color: '#fff' }}>Hikayen</Text>
                </View>
                <View style={styles.storyContent}>
                    <View style={styles.storyProfile}>
                        <Image source={{ uri: 'https://cdn.wallpapersafari.com/38/11/2WqNdH.jpg' }} style={styles.profilePicPassive} />
                    </View>
                    <Text style={{ color: '#fff' }}>Hikayen</Text>
                </View>
                <View style={styles.storyContent}>
                    <View style={styles.storyProfile}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OC5ivtQPRNj-Z6tgPsxnb1nbdt5CkAi4Iw&usqp=CAU' }} style={styles.profilePicPassive} />
                    </View>
                    <Text style={{ color: '#fff' }}>Hikayen</Text>
                </View>
                <View style={styles.storyContent}>
                    <View style={styles.storyProfile}>
                        <Image source={{ uri: 'https://i0.wp.com/www.alphr.com/wp-content/uploads/2020/12/Facebook-How-to-Change-Profile-Picture.jpg?fit=1200%2C666&ssl=1' }} style={styles.profilePicPassive} />
                    </View>
                    <Text style={{ color: '#fff' }}>Hikayen</Text>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    myStory: {
        position: 'relative'
    },
    storyContainer: {
        flexDirection: 'row',
        marginLeft: 25
    },
    storyContent: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    storyIcon: {
        position: 'absolute',
        backgroundColor: '#00bbf9',
        fontSize: 17,
        height: 25,
        width: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        right: 0
    },
    storyProfile: {
        width: 70,
        height: 70,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: 'white',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePicActive: {
        borderRadius: 58,
        width: 58,
        height: 58,
        opacity: 1
    },
    profilePicPassive: {
        borderRadius: 58,
        width: 58,
        height: 58,
        opacity: 0.8

    }
})