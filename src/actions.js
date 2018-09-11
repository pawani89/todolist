export const addToList = (data,checked) => ({
    type: 'AddToList',
    data,checked
})

export const addToDone = (data,checked,key) => ({
    type: 'addToDone',
    data,checked,key
})

export const removeFromDone = (data, checked,key) => ({
    type: 'removeFromDone',
    data,
    checked,key
})