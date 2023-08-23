'use client'
import React from 'react'
import { useContextReducer } from '../../context'

const Login = () => {
const [state] = useContextReducer()

console.log(state)
  return (
    <div className='container'>
        <h1>Instagram</h1>
        <input placeholder='Phone number,username,or email' onChange={({target:{value}})}/>
        <input placeholder='Password' />
        <button style={{ backgroundColor: '#1199db' }}>Login</button>
      </div>
  )
}

export default Login