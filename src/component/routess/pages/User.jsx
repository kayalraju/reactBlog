import React from 'react'
import ContexUser from '../../ContexHooks/ContexUser'
import{useContext} from 'react'

export const User = () => {
  const result=useContext(ContexUser)
  return (
    <div style={{marginTop:'90px'}}>
        <h1>User name is {result.name}</h1>
        <h1>User email {result.email}</h1>
    </div>
  )
}
