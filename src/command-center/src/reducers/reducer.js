const initialState = {
    counter: 0
}


export default function reducer(state = initialState, action) {
    const newState = { ...state }
      
    switch (action.type) {
        case 'COUNTER':
            console.log("Adding counter")
            newState.counter += 1
            return newState

        default:
            console.log("Default reducer.")
            return state
    }

}