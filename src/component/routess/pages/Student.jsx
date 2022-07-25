import React from 'react'
import{useContext} from 'react'
import ContexUser from '../../ContexHooks/ContexUser'

export const Student = () => {
  const result=useContext(ContexUser)

  return (
    <div style={{marginTop:'90px'}}>
        <h1>
          <h3>Student name is : {result.name} </h3>
        </h1>
    </div>
  )
}
