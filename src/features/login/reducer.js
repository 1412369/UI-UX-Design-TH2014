 
import Types from './constant'
const initialState = {
    username: "",
    password: "",
    error: "",
    logged: false
}
export default (state = initialState, actions) => {
    switch (actions.type) {
        case Types.LOGIN_SUCCESS:
            return {
                ...state,
                logged: true
            }
        case Types.LOGIN_FAIL:
            return {
                ...initialState,
                error: "your account or password may not correct!",
            }
        case Types.LOGIN_LOGOUT:
            return {
                ...initialState
            }
    }
    return state
}