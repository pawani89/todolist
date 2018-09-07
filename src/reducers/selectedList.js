const selectedList = (state=[], actions)=>{
    switch(actions.type){
        case 'addToDone':{
            console.log(actions)
            return [...state, 
                {data: actions.data,
                    checked:actions.checked}
        // return [...state, 
        //     {data: actions.data.list,
        //         checked:actions.data.checked}
    ]}
        case 'removeFromDone' :
        if(state){
                return state.filter((obj,key)=> obj.data !== actions.data)
            }else{
                return "nothing done to delete"
            }
        
        default: return state
        
    }
}
export default selectedList