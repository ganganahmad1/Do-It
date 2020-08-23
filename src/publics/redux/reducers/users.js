let initialState = {
    loading: true,
    data: [],
}
const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                loading: true,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.result
            }
        case 'LOGOUT_PENDING':
            return {
                ...state,
                loading: true,
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.result
            }
        case 'REGIS_PENDING':
            return {
                ...state,
                loading: true,
            }
        case 'REGIS_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.result
            }
        default:
            return initialState
    }
}

export default UsersReducer;