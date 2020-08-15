const INITIAL_STATE_SEARCHFILED = {
    searchField: ''

}

const INITILA_STATE_MONSTERS = {
    isPending: false,
    monsters: [],
    error: ''
}
//REQUEST_MONSTERS_PENDING
//REQUEST_MONSTERS_SUCCESS
//REQUEST_MONSTERS_FAILED

export const searchReducer = (state = INITIAL_STATE_SEARCHFILED, action) => {
    switch (action.type) {
        case "SET_CURRENT_SEARCH":
            return ({
                ...state,
                searchField: action.payload
            })
        default:
            return (
                state
            )
    }
}

export const fetchReducer = (state = INITILA_STATE_MONSTERS, action) => {
    switch (action.type) {
        case 'REQUEST_MONSTERS_PENDING':
            return ({
                ...state,
                isPending: true
            })
        case 'REQUEST_MONSTERS_SUCCESS':
            return ({
                ...state,
                monsters: action.payload,
                isPending: false
            })
        case 'REQUEST_MONSTERS_FAILED':
            return ({
                ...state,
                error: action.payload,
                isPending: false

            })
        default: return state;
    }
}