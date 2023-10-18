import React from 'react'
import { View } from 'react-native'
import { UserList } from '../components/UserList'
import { ModalUser } from '../components/ModalUser'

export const HomeScreen = () => {
    return (<>
        <View style={{ flex: 1 }}>
            <UserList />
            <ModalUser />
        </View>
    </>)
}
