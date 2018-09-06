const toDoList = (state = [], action) => {
    switch (action.type) {
        case 'AddToList':

            return [...state, action.list]
        default: return state
    }
}

export default toDoList