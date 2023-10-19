import { createContext, useState } from "react";

type ModalContextType = {
    setModalVisible: (val: boolean) => void;
    modalVisible: boolean;
    userData: UserDataType;
    setUserData: (val: UserDataType) => void;
}

type UserDataType = {
    username: string,
    pictureURL: string,
    email: string,
    firstName: string
    lastName: string,
    gender: string,
    phone: string,
    birthday: string,
    //"firstName", "username", "pictureURL", "email", "lastName"

}

const defaultModalContext: ModalContextType = {
    setModalVisible: () => { },
    modalVisible: false,
    userData: { username: '', pictureURL: '', email: '', firstName: '', lastName: '', gender: '', phone: '', birthday: '' },
    setUserData: () => { },
}

export const ModalContext = createContext(defaultModalContext);

export const ModalProvider = ({ children }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [userData, setUserData] = useState<UserDataType>(defaultModalContext.userData);

    const value: ModalContextType = {
        setModalVisible,
        modalVisible,
        userData,
        setUserData
    }
    return (<ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>)
}
