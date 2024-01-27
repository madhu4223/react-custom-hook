import { useEffect, useRef } from "react"

const useDebounce = (value, delay, callback) => {
    const timeoutRef = useRef(null)

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
            callback(value)
        }, delay);

        return () => {
            clearTimeout(timeoutRef.current)
        }
    })
}

export default useDebounce;