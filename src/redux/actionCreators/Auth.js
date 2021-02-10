export const setLogintrue = (data) => {
    return {
        type: "LOGIN_TRUE",
        payload: data

    }
}

export const setEmail = (email) => {
    return {
        type: "SET_EMAIL",
        payload: email
    }
}

export const removeEmail = (email) => {
    return {
        type: "REMOVE_EMAIL",
    }
}

export const setLoginfalse = () => {
    return {
        type: "LOGIN_FALSE",
    }
}

export const passToken = (token) => {
    return {
        type: "GET_TOKEN",
        token
    }
}