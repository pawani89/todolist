export const addToList = (list) => ({
    type: 'AddToList',
    list
})

export const addToDone = (list, checked) => ({
    type: 'addToDone',
    list,
    checked
})

export const removeFromDone = (list, checked) => ({
    type: 'removeFromDone',
    list,
    checked
})