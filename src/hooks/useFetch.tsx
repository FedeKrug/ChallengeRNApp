import { useEffect, useState } from "react";
import { fetchAPI } from "../helpers/fetchAPI";

export const useFetch = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const newUsers = await fetchAPI();
        setUsers(newUsers);
    }
    useEffect(() => {
        getUsers();
    }, [])

    return {
        users,
        ...users,
        getUsers
    }
}