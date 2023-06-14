import { useRef } from "react";


export function UseRefComponent(){
    let inputref=useRef<HTMLInputElement|null>(null)
    const handleClick=()=>{
            inputref.current?.focus();
    }
    return (
        <>
        <input ref={inputref}/>
        <button onClick={handleClick}>CLick</button>
        </>
    )
}