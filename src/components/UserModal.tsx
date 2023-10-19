import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useFetch } from '../hooks/useFetch';
import { UserData } from './UserData';

type UserModalType = {
    username: string;
    name: string;
    email: string;
    lastname: string;
    gender: 'male' | 'female';
    phone: string;
    birthday: string;
    pictureURL: string;
}

export const UserModal = () => {
    const { id, pictureURL, username, name, email, lastname, gender, phone, birthday } = UserData();

    return (<>
        <View style={styles.container}>
            <Image
                style={styles.userImage}
                source={{
                    uri: pictureURL
                }} />
            <Text style={styles.usernameText}>
                {username}
            </Text>
            <Text style={styles.emailText}>
                {email}
            </Text>


            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    {name}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    {lastname}
                </Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    {gender}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    {phone}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.normalText}>
                    {birthday}
                </Text>
            </View>
        </View>
    </>)
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        flex: 1,
        width: 330
    },
    userImage: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        alignSelf: 'center',
        borderRadius: 100
    },
    usernameText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold'
    },
    normalText: {
        fontSize: 20,
        textAlign: 'left',
        color: '#000',
    },
    emailText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#bbb'
    },
    textContainer: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5
    }
});