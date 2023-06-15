import React, { useEffect, useState } from 'react'
import Logout from './logout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const [data, setdata] = useState({})
  useEffect(() => {
    axios.get('http://localhost:3000/api/users/getMe', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => setdata(res.data))
      .catch(() => navigate('/login'))
  }, [])

  return (
    <div>
      {token &&
        <div>
          <h1>{data.email}</h1>
          <Logout />
        </div>
      }
    </div>
  )
}

export default Home