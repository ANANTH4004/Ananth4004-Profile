import { useState } from 'react'

const IncrementDecrement = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    console.log('Incrementing count', count)
    setCount(count + 1)
  }
  const decrement = () => {
    setCount((count) => count - 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(3)}>reset</button>
    </div>
  )
}

export default IncrementDecrement
