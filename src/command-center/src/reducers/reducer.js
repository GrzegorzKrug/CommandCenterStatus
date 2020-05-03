const initialState = {
    counter: 0
}


export default function reducer(state = initialState, action) {
    const newState = { ...state }
    console.log("reducer:")
    switch (action.type) {
        case 'RESTART':
            console.log("Adding counter")
            newState.counter += 1
            return newState

        default:
            console.log("DEFAULT REDUCER!")
            return state
    }

}