import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const UserData = () => {
    const { users } = useFetch();
    const { id, pictureURL, username, name, email, lastname, gender, phone, birthday }: any = users;

    return {
        id, pictureURL, username, name, email, lastname, gender, phone, birthday
    }
}
