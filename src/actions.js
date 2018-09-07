export const addToList = (data,checked) => ({
    type: 'AddToList',
    data,checked
})

export const addToDone = (data,checked) => ({
    type: 'addToDone',
    data,checked
})

export const removeFromDone = (data, checked) => ({
    type: 'removeFromDone',
    data,
    checked
})