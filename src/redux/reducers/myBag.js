const bagReducer = (prevstate = { mybag: [] }, action) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...prevstate,
                mybag: [...prevstate.mybag, action.data]
            }
        default:
            return {
                ...prevstate,
            };
    }

}

export default bagReducer;