const initialState = {
    counter: 0
}


export default function reducer(state = initialState, action) {
    const newState = { ...state }

    switch (action.type) {
        case 'COUNTER':
            newState.counter += 1
            console.log("Adding counter", newState.counter)

            return newState

        default:
            console.log("Default reducer.")
            return state
    }

}
