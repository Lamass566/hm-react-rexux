const defaultState = {datas: []}

function fetchReducer(state=defaultState, action){
    let newState;
    switch(action.type){
        case "SET_USERS":
            newState =  {...state, datas: action.payload}
            return newState
        default:
            return state
    }
}

export default fetchReducer