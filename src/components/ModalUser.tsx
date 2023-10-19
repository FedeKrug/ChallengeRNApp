import React, { useContext } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserModal } from './UserModal';
import { useFetch } from '../hooks/useFetch';
import { useModal } from '../hooks/useModal';
import { ModalContext } from '../context/ModalContext';

export const ModalUser = () => {
    const { closeModal } = useModal();
    const { modalVisible } = useContext(ModalContext);
    const { users } = useFetch();
    const { firstName, lastName, username, email, phone, gender, birthday, pictureURL }: any = users;


    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <View >
                            <UserModal
                            // name={firstName}
                            // lastname={lastName}
                            // username={username}
                            // phone={phone}
                            // birthday={birthday}
                            // email={email}
                            // gender={gender}
                            // pictureURL={pictureURL}
                            />
                        </View>

                        <View style={{ position: 'absolute', bottom: 30 }}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={closeModal}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#ddd',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        width: 350,
        height: 600,
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 300
    },

    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

