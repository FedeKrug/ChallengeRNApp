import React, { useEffect, useState } from 'react'
import { UserItem } from './UserItem'
import { fetchAPI } from '../helpers/fetchAPI'
import { useFetch } from '../hooks/useFetch'

export const UserList = () => {
    const { users } = useFetch();
    return (<>
        {
            users.map(({ id, firstName, lastName, pictureURL }) => {
                return <UserItem modalIndex={id} key={id} username={`${firstName} ${lastName}`} photoURL={pictureURL} />
            })
        }

    </>)
}
