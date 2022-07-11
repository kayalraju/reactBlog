import React from 'react'
import { useState } from 'react'

export const Contact = () => {
    const [name,setName]=useState()
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`your name is ${name}`)
        console.log(name);
    }
  return (
    <div style={{marginTop:'80px'}}>
        <h1>React form handalling</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
            <input type="submit" value="submit" />

        </form>
    </div>
  )
}
