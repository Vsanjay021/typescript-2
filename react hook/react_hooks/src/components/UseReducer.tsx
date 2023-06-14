import { useReducer } from "react";

let initialState={
    count:0
}
// interface actionType{
//     type:string,
//     payload:number
// }

type actionType = {type:"Increment",payload:number} | {type:"Decrement",payload:number}
function reducerFun(state:typeof initialState,action:actionType){
    switch(action.type){
        case "Increment": 
            return {count:state.count+action.payload};
        case "Decrement" :
            return {count:state.count-action.payload};
        default : return state;
    }
}

export function UseReducerComponent(){
    let [state,dispatch]=useReducer(reducerFun,initialState);

    const handleClickIncrement=()=>{
        dispatch({type:"Increment",payload:1})
    }
    const handleClickDecrement=()=>{
        dispatch({type:"Decrement",payload:1})
    }
    return (
        <div>
            <h1>count : {state.count}</h1>;
            <button onClick={handleClickIncrement} >Increment</button>
            <button onClick={handleClickDecrement}>Decrement</button>
        </div>
    )
}