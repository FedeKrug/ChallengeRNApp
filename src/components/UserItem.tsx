import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '../hooks/useModal';

type UserItemType = {
    username: string;
    photoURL: string
    modalIndex: number;
}



export const UserItem = ({ item }: any) => {
    const { pictureURL, firstName, lastName } = item;
    const { openModal } = useModal();
    console.log(Object.keys(item));
    return (<>
        <TouchableOpacity
            onPress={() => openModal(item)}
        >
            <View style={styles.titleContainer}>

                <Image style={styles.userPhoto}
                    source={{
                        uri: pictureURL
                    }}
                />
                <Text style={styles.title}>
                    {`${firstName}, ${lastName}`}
                </Text>
            </View>
        </TouchableOpacity>
    </>)
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#184693',
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        marginLeft: 20

    },
    userPhoto: {
        width: 60,
        height: 60,
        backgroundColor: 'red',
        marginLeft: 20,
        borderRadius: 100
    }

});