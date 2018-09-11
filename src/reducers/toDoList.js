const toDoList = (state = [], action) => {
    switch (action.type) {
        case 'AddToList':
            return [...state, {data:action.data, checked: action.checked}]
        case 'addToDone':{
                return state.map((obj)=> {
                    if(obj.data === action.data){
                        return {...obj,
                        checked:!obj.checked}
                    }else{
                        return obj
                    }}) 
        
            }
        case 'removeFromDone' :
        {
            return state.map((obj,key)=> {
                if(obj.data === action.data){
                    return {...obj,
                    checked:!obj.checked}
                }else{
                    return obj
                }}) 
    
        }

            // if(state){
            //         return state.filter((obj,key)=> obj.checked === false)
            //     }else{
            //         return "nothing done to delete"
            //     }       
        default: return state
    }
}

export default toDoList