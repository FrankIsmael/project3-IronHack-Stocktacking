import React from 'react'

function LoginForm({ handleInputs, handleSubmit,handleSignup }) {
  return (
    <form className="column box is-three-quarters" onSubmit={handleSubmit}>
        {
          handleSignup &&
        <div className="field " >
          <label className="label">Name</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input is-two-thirds" type="text" name="name" onChange={handleInputs} placeholder="name" />
            <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
      }

        <div className="field " >
          <label className="label">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input is-two-thirds" type="email" name="email" onChange={handleInputs} placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field ">
          <label className="label">Password</label>
          <p className="control has-icons-left is-two-thirds">
            <input className="input" type="password" name="password" onChange={handleInputs} placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div className="field ">
          <p className="control has-text-centered">
            { handleSignup ?
              <button className="button is-success " type="submit">
              SignUp
            </button>
            :
            <button className="button is-success " type="submit">
              Login
            </button>
            }

            
          </p>
        </div>

    </form>
  )
}

export default LoginForm
/*<div className="login-form">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Log in</h2>
            <div className="form-group">
              <input type="email" className="form-control" name="email" onChange={handleInputs} placeholder="Email" required="required" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" onChange={handleInputs} placeholder="Password" required="required" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </div>
          </form>
    </div>*/