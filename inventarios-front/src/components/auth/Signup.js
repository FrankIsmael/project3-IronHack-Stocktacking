import React, { Component } from 'react'
import LoginForm from './LoginForm'

import toastr from 'toastr'
import AuthService from './auth-service';

const service = new AuthService()

class Signup extends Component {
  
  state = {
    form: {
      name: '',
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
      .signup(form)
      .then(response => {
        this.setState({
            name:"",
            email: "",
            password:""
        })
        this.props.getUser(response)
        if (response.err) return toastr.error(response.err)
        toastr.success('User created succesfully')
        window.localStorage.setItem('User', JSON.stringify(response))
        if(response.role === 'SUPERVISOR') return this.props.history.push('/supervisor')
      })
      .catch(err => {return {msg: err}})
  }

  render() {
    return (
      <div className="columns is-mobile login">
        <LoginForm handleInputs={this.handleInputs} handleSubmit={this.handleSubmit} handleSignup={true}/>
      </div>
    )
  }
}

export default Signup
