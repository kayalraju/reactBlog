import React from 'react'
import ContexUser from './ContexUser'

const UserState = ({children}) => {
    const state={
        name:"Ritam saha",
        email:"ritam@gmail.com",
        phone:"9969656895"
    }
  return (
    <ContexUser.Provider value={state}>
        {children}
    </ContexUser.Provider>
  )
}

export default UserState
