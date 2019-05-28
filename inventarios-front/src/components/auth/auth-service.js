import axios from 'axios'
const baseURL = 'https://easystock.herokuapp.com/api'

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  signup = form => {
    return this.service
      .post('/signup', form)
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

  handleUpload = (theFile) => {
    return this.service
    .post('/upload',theFile)
    .then(res => res.data)
    .catch(err => {throw err})
  } 

  saveDocument = (newDocument) => {
    return this.service
    .post('/documents',newDocument)
    .then(res => res.data)
    .catch(err => {throw err})
  }
}

export default AuthService