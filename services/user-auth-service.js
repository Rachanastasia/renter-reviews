import { REACT_APP_API_ENDPOINT } from '../config'

const UserAuthService = {
  postLogin(email, password) {
    return fetch(`${REACT_APP_API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json())
  },
  postNewUser(email, password, nickname) {
    return fetch(`${REACT_APP_API_ENDPOINT}/user`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password, nickname })
    })
  }
}

export default UserAuthService