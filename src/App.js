import React,{ useState } from 'react'
import bootstrap from 'bootstrap'
export default function Counter(){
  const [count, setCount]=useState(0);
  const handleIncrement=()=>(
    setCount(count+1)

  )
  const handleDecrement=()=>(
    setCount(count-1)
  )
  const handleReset=()=>(
    setCount(0)
  )

  return(
    <div>
      <div className='d-flex justify-content-center align-items-center' style={{height: "50vh"}}>
      <div>
        <h1 className="text-center " style={{fontSize: "70px"}}>{count}</h1>
        <div className="d-flex">
          <button onClick={handleIncrement}className='btn btn-success me-3'>Increment</button>
          <button onClick={handleReset} classname='btn btn-info me-3'>Reset</button>
          <button onClick={handleDecrement}className='btn btn-danger me-3'>Decrement</button>
        </div>
      </div>
    </div>
    <div>
      <p className="text-center">Name: Mayank Rajput    Reg no:12011597</p>
    </div>
    </div>
  )
}