const authReducer = (
    prevState = {
        isLogin: false,
        user_id: 0,
        email: '',
        name: '',
        level: 0,
        token:''
    }, action) => {
    switch (action.type) {
        case "LOGIN_TRUE":
            return {
                ...prevState,
                isLogin: true,
                user_id:action.payload.user_id,
                email:action.payload.email,
                name:action.payload.name,
                level:action.payload.level,
                token:action.payload.token
            };
        case "LOGIN_FALSE":
            return {
                ...prevState,
                isLogin: false,
                user_id: 0,
                email: '',
                name: '',
                level: 0
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