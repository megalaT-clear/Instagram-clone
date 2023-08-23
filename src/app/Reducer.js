'use client'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      return {
        ...state,
        list: [...state.list, action.data.signUp],
      }
    default:
      return state
  }

}

export const initialState = {
  list: [
    {
      userContact: 123,
      fullName: 'Megala',
      userName: 'M',
      passWord: 'M'
    },
    {
      userContact: 321,
      fullName: 'RamKumar',
      userName: 'R',
      passWord: 'R'
    }
  ]
}


