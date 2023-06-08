import {useEffect,useState} from 'react' 

function UseEffectComponent(){
    let [count,setCount]=useState(1);
    useEffect(()=>{
        let timer=setInterval(()=>{
            setCount((prev)=>prev+1);
        },1000);
        return()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <>
        <div>{count}</div>
        </>
    )
}

export default UseEffectComponent