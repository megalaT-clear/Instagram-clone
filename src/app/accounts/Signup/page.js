'use client'
import React, { useState } from 'react'
import { useContextReducer } from '../../context'
import { useRouter } from 'next/navigation';

const handleInputChange = ({ input: { property }, value, setState, state }) => {
  setState({
    signUp: {
      ...state.signUp,
      [property]: value
    }
  });
};


const inputs = [
  {
    placeholder: 'Phone number or email',
    property: 'userContact',
  },
  {
    placeholder: 'fullName',
    property: 'fullName',
  },
  {
    placeholder: 'userName',
    property: 'userName',
  },
  {
    placeholder: 'Password',
    property: 'Password',
  },
]

const Signup = () => {
  const [state, setState] = useState({})
  const [{ list }, dispatch] = useContextReducer()

  const router = useRouter()

  const addUser = () => {
    dispatch({ type: 'Add', data: state });
    router.push('/')
  };
  const newLocal = () => {
    const isValid = !list.find((e) => e.userContact === state.signUp.userContact)
    console.log(isValid)
    isValid ? addUser() : alert('User already exist');

  }

  return (
    <div className='container'>
      <div className='imageContainer'></div>
      <p className='paraHeader'>Sign up to see photos and videos from your friends.</p>
      <button style={{ backgroundColor: '#4ea1f7', border: 'none', color: 'white' }}>
        Log in with Facebook
      </button>
      {
        inputs.map((input) =>
          <input style={{ marginBottom: '8px' }}
            placeholder={input.placeholder}
            onChange={({ target: { value } }) =>
              handleInputChange({ input, value, setState, state })}
          />
        )
      }
      <button style={{ backgroundColor: '#88cafb', border: 'none', color: 'white' }}
        onClick={newLocal}
      >Signup</button>
    </div>
  )
}

export default Signup;




