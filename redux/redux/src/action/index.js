const incNumber=()=>{
    return {
        type:"Increment",
        payload:1
    }
}

const decNumber=()=>{
    return {
        type:"Decrement",
        payload:-1
    }
}


export {incNumber,decNumber}