import React, { createContext, useState } from 'react'
import TokenService from '../services/token-service.js'
import { postLogin, postNewUser } from '../services/user-auth-service.js'

export const UserContext = createContext()

function UserContextProvider({ children }) {
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)

  const handleLogin = async (email, password) => {
    try {
      console.log(email, password)
      const authToken = await postLogin(email, password)

      if (!authToken) {
        setError(authToken.error)
        return
      }

      await TokenService.saveAuthToken(authToken)
      const { email, id, nickname } = TokenService.parseAuthToken()
      setUser({
        id,
        nickname,
        email
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  const handleLogout = () => {
    TokenService.clearAuthToken()
    setUser({})
  }


  const value = { user, error, setError, handleLogin, handleLogout }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
