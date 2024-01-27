import { useState } from "react";

const useArray = (defaultValue = []) => {
    const [array, setArray] = useState(defaultValue)

    const push = (value) => {
        setArray([...array, value])
    }
    const remove = (index) => {
        const temp = [...array]
        temp.splice(index, 1)
        setArray([...temp])
    }
    const filter = (callback) => {
        setArray(array.filter(callback))
    }
    const clear = ()=>{
        setArray([])
    }
    return {array, push, remove, filter, clear}
}
export default useArray;