import React from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'

export const Contact = () => {
    const [name,setName]=useState()
    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`your name is ${name}`)
        console.log(name);
    }

    const {id, names}=useParams()
  return (
    <div style={{marginTop:'80px'}}>
        <h1>React form handalling   {id}/{names}</h1>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
            </label>
            <input type="submit" value="submit" />

        </form>
    </div>
  )
}
