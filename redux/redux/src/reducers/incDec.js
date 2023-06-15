let InitialState={
    count:0
}
const incDec=(state=InitialState,action)=>{
    switch(action.type){
        case "Increment" : 
            return {count:state.count+action.payload}
        case "Decrement" : return {
            count:state.count+action.payload
        }
        default : return state
    }
}

export {incDec}