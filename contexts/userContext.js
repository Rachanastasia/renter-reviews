import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function UserContextProvider({ children }) {
  const [user, setUser] = useState('testing')
  const [error, setError] = useState(null)

  const value = { user, error }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
