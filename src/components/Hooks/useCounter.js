import {useState} from 'react'

function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount)
    const increment =()=>{
        setCount(prevCount => prevCount + value)
    }
    const decrement =()=>{
        setCount(prevCount => prevCount - value)
    }
    const reset = () =>{
        setCount(0)
    }
  return [count, increment, decrement, reset]
}

export default useCounter