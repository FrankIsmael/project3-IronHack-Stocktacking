import React, { Component } from 'react'
import LoginForm from './LoginForm'

import toastr from 'toastr'
import AuthService from './auth-service';

const service = new AuthService()

class Login extends Component {
  /* componentWillMount() {
    const user = localStorage.getItem('loggedUser')
  
  } */

  state = {
    form: {
      email: '',
      password: ''
    }
  }

  handleInputs = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState(form)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { form } = this.state
    service
      .login(form)
      .then(response => {
        if (response.err) return toastr.error(response.err)
        toastr.success('Successful login')
        window.localStorage.setItem('loggedUser', JSON.stringify(response.role))
        if(response.role === 'ADMIN') return this.props.history.push('/admin')
        return this.props.history.push('/supervisor')
      })
      .catch(err => {return {msg: err}})
  }

  render() {
    return (
      <div className="columns is-mobile login">
        <LoginForm handleInputs={this.handleInputs} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default Login
