import { useState } from "react"

function UseStateComponent() {
    let [data, setData] = useState<number[]>([]);
    return (
        <>
            <button onClick={() => {
                setData([...data, data.length + 1])
            }} >Enter</button>
            {JSON.stringify(data)}
        </>
    )
}

export default UseStateComponent