import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext';

export const useModal = () => {

    const { modalVisible, setModalVisible, userData, setUserData } = useContext(ModalContext);
    const openModal = (item: any) => {
        setModalVisible(true);
        setUserData(item);
    }
    const closeModal = () => {
        setModalVisible(false);
        setUserData({ username: '', pictureURL: '', email: '', firstName: '', lastName: '', gender: '', phone: '', birthday: '' });
    }

    return {
        modalVisible,
        openModal,
        closeModal,
        userData
    }
}
