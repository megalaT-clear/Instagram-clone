'use client'

import React, { useReducer } from 'react'
import Context from './context'
import { initialState, reducer } from './Reducer'


const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export default Provider