import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleDecrement = () => {
        if(count > 0){
            setCount(count-1)
        }
    }

  return (
    <div>
        <button onClick={handleDecrement}>decrement</button>
        {count}
        <button onClick={handleIncrement}>increment</button>

    </div>
  )
}

export default Counter