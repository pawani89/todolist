const toDoList = (state = [], action) => {
    switch (action.type) {
        case 'AddToList':

            return [...state, {data:action.data, checked: action.checked}]
        default: return state
    }
}

export default toDoList