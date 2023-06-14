import {useContext} from "react";
import UserContext, { userType } from "./store";


function ChildrenComponent(){
    let {user,updateUser}:userType=useContext(UserContext);
    let handleClick=(obj:userType["user"])=>{
        updateUser(obj)
    }
    return (
        <div>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <button onClick={()=>handleClick({name:"sanjay v",age:22})}>update Context</button>
        </div>
    )
}

export default ChildrenComponent;

