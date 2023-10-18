import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext';

export const useModal = () => {

    const { modalVisible, setModalVisible } = useContext(ModalContext);
    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false);
    }

    return {
        modalVisible,
        openModal,
        closeModal
    }
}
