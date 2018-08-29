const toDoList = (state = [], action) => {
    switch (action.type) {
        case 'AddToList':

            return [...state, action.list]

        case 'selectList':
            action.checkOnOff === 'on' ?
        default: return state
    }
}

export default toDoList