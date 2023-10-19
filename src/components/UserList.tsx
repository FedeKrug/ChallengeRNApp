import React, { useEffect, useState } from 'react'
import { UserItem } from './UserItem'
import { useFetch } from '../hooks/useFetch'

export const UserList = () => {
    const { users } = useFetch();
    return (<>
        {
            users.map((item, i) => {
                return <UserItem item={item} key={i} />
            })
        }

    </>)
}
