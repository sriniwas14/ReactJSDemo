const initState = {
    users: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_USERS":
            return {
                users: action.payload
            }
            break;
        default:
            return initState
    }
}

export default rootReducer