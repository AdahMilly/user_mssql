export const setUserAndToken = (user, token) => {
    if (localStorage) {
        const userStr = JSON.stringify(user)
        localStorage.setItem('user', userStr)
        localStorage.setItem('token', token)
    }
}

export const getUser = () => {
    let user;
    if (localStorage) {
        const userStr = localStorage.getItem('user')
        user = JSON.parse(userStr)
    }
    return user;
}

export const getToken = () => {
    let token;
    if (localStorage) {
        token = localStorage.getItem('token');
    }

    return token;
}