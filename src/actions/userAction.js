export const setUsers = (dispatch) => (itemlist) => {
    dispatch({
        type: "FETCH_USERS",
        payload: [
            ...itemlist
        ]
    })
}