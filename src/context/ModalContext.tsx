import { createContext, useState } from "react";

type ModalContextType = {
    setModalVisible: (val: boolean) => void;
    modalVisible: boolean;
}

const defaultModalContext: ModalContextType = {
    setModalVisible: (val: boolean) => { },
    modalVisible: false
}

export const ModalContext = createContext(defaultModalContext);

export const ModalProvider = ({ children }: any) => {
    const [modalVisible, setModalVisible] = useState(false);


    const value: ModalContextType = {
        setModalVisible,
        modalVisible
    }
    return (<ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>)
}
