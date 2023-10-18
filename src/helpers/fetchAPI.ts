
const url = 'https://jserver-api.herokuapp.com/users'

export const fetchAPI = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const users = data.map(({ firstName, username, pictureURL, email, lastName }: any) => ({
        firstName,
        username,
        pictureURL,
        email,
        lastName
    }))

    return users;
}

