import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

import BookReducer from '../reducers/BookReducer'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  })
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

BookContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BookContextProvider
