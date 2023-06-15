import React from 'react'

const Logout = () => {
  const logout = ()=>{
    localStorage.removeItem('token')
  }
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout