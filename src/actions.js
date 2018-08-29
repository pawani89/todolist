export const addToList = (list) => ({
    type: 'AddToList',
    list
})

export const selectList = (list, checkOnOff) => ({
    type: 'SelectList',
    list,
    checkOnOff
})