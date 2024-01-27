import React, { useState } from "react";
import useArray from "../hooks/useArray"

const ArrayOperations = () => {
    const { array, push, remove, filter, clear } = useArray([1, 2, 3])
    const [inputVal, setInputVal] = useState("")

    return (
        <div style={{margin:"15px"}}>
            <h6>array operations</h6>
            <div>{array.length ? array.join(",") : "List is empty"}</div><br/>
            <button onClick={() => { push(7) }}>add 7</button><br />
            <button onClick={() => { remove(1) }}>remove second element</button><br />
            <button onClick={() => { filter(n => n <= 4) }}>remove greaterthan 4</button><br />
            <button onClick={() => { clear() }}>clear</button><br />
            <input type="number" placeholder="enter number" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <button onClick={()=>{push(inputVal);setInputVal("")}}>add to list</button>
        </div>
    )

}

export default ArrayOperations;