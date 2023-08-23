'use client'
import { createContext, useContext } from 'react'

const Context = createContext()

export const useContextReducer = () =>  useContext(Context)

export default Context