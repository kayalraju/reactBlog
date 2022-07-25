import React from 'react'
import { useReducer } from 'react'

const initalstate=1
const reducer=(state,action)=>{

    switch(action){
        case 'incriment':
            return state +1
        case 'decriment':
            return state -1
        default:
            return state        
    }
}

const CounterReducer = () => {
    const [count,dispatch]=useReducer(reducer,initalstate)
  return (
    <div>
      <h1>User reducer hooks </h1>
      <h1> count {count}</h1>
      <button onClick={()=>{dispatch('incriment')}}>Incriment</button> 
      <button onClick={()=>{dispatch('decriment')}}>decriment</button>
    </div>
  )
}

export default CounterReducer
