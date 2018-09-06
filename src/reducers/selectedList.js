const selectedList = (state=[], actions)=>{
    switch(actions.type){
        case 'addToDone':
        return [...state, 
            {data: actions.list,
        checked:actions.checked}
    ]
        case 'removeFromDone' :
        if(state){
                return state.filter((obj,key)=> obj.data !== actions.list)
            }else{
                return "nothing done to delete"
            }
        
        default: return state
        
    }
}
export default selectedList