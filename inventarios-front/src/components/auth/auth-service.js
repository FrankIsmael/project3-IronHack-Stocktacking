import axios from 'axios'
const baseURL = 'http://localhost:5000/api'

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }
  new = form => {
    return this.service
      .post('/newuser', form)
      .then(({ data }) => data)
      .catch(err => err)
  }

  login = form => {
    return this.service
      .post('/login', form)
      .then(response => response.data)
      .catch(err => {
        return { err: 'Password incorrect' }
      })
  }

  logout=()=>{
    return this.service
    .get('/logout')
    .then(response =>{
      return response})
    .catch( err => err) 
  }

  loggedin = () => {
      return this.service
      .get('/loggedin')
  }



}

export default AuthService