import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AuthService from '../auth/auth-service'
import toastr from 'toastr'

const service = new AuthService()

class Navbar extends Component {

  state = {
    loggedInUser: null
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
    console.log(this.state.loggedInUser)
  }

  logoutUser = () => {
    service.logout()
      .then(() => <Redirect to='/' />)
    localStorage.clear()
    toastr.success('Successful logout');

  }

  render() {
    if (!localStorage.getItem("loggedUser")) {
      return (
        <>
          <nav className="navbar is-dark is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="https://iconsgalore.com/wp-content/uploads/2018/10/cell-phone-1-featured-2.png" alt="easyStock icon" width="30rem" height="90rem" />
                <h1 className="has-text-warning"><strong>easyStock</strong></h1>
              </a>
              <div className="navbar-burger burger" data-target="navbarBurger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div id="navbarBurger" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home
      </a>
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary" href="/signup">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light" href="/login">
                      Log in
                  </a>
                  </div>

                </div>
              </div>
            </div>
          </nav>
        </>
      )
    } else {
      return (
        <>
          <nav className="navbar is-dark is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="https://iconsgalore.com/wp-content/uploads/2018/10/cell-phone-1-featured-2.png" alt="easyStock icon" width="30rem" height="90rem" />
                <h1 className="has-text-warning"><strong>easyStock</strong></h1>
              </a>
              <div className="navbar-burger burger" data-target="navbarBurger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div id="navbarBurger" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home
          </a>
              </div>

            </div>
          </nav>
        </>
      )
    }



  }
}

export default Navbar

/*

 {
          localStorage.getItem("loggedUser") ?

          <div className="buttons">
          <a className="button is-danger" onClick={() => {
              service.logout();
              localStorage.clear()
              toastr.success('Successful logout')}} href="/">
            Log out
          </a>
        </div>
          :
        <div className="buttons">
          <a className="button is-primary" href="/signup">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" href="/login">
            Log in
          </a>
        </div>
      }
*/