import {createContext} from "react";

let personData={
    name:"sanjay v",
    age:22
}
const context=createContext<typeof personData>(personData);

export default context