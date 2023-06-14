import { useContext, useEffect, useState } from 'react'
import UserContext, { userType } from './store';

function UseEffectComponent() {
    const {user,updateUser}=useContext(UserContext);
    let [count, setCount] = useState(1);
    useEffect(() => {
        let timer = setInterval(() => {
            console.log(count)
            setCount((prev) => prev + 1);
            
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    let handleClick=(obj:userType["user"])=>{
        updateUser(obj)
    }
    return (
        <>
            <div>{count}</div>
            <h1>{JSON.stringify(user)}</h1>
            <button onClick={()=>handleClick({name:"varun",age:30})}>Update context in useEffect component</button>
        </>
    )
}

export default UseEffectComponent