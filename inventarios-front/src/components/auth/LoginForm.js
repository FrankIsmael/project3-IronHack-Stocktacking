import React from 'react'

function LoginForm({ handleInputs, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleInputs} />
        <input type="password" name="password" onChange={handleInputs} />
        <button >Login</button>
      </form>

    </div>
  )
}

export default LoginForm
