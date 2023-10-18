import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useModal } from '../hooks/useModal';

type UserItemType = {
    username: string;
    photoURL: string
    modalIndex: number;
}

export const UserItem = ({ username, photoURL, modalIndex }: UserItemType) => {
    const { openModal } = useModal();
    const abrirModal = () => {
        openModal();
        return modalIndex;
    }

    return (<>
        <TouchableOpacity
            onPress={abrirModal}
        >
            <View style={styles.titleContainer}>

                <Image style={styles.userPhoto}
                    source={{
                        uri: photoURL
                    }}
                />
                <Text style={styles.title}>
                    {username}
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