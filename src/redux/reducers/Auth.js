const authReducer = (prevState = { isLogin: false }, action) => {
    switch (action.type) {
        case "LOGIN_TRUE":
            return {
                ...prevState,
                isLogin: true,
            };
        case "LOGIN_FALSE":
            return {
                ...prevState,
                isLogin: false,
            };
        case "GET_TOKEN":
            return {
                ...prevState,
                newState: action.token
            }
        default:
            return {
                ...prevState,
            };
    }
}

export default authReducer;