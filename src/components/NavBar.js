/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const Navbar = () => {
  const { books } = useContext(BookContext)
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <span>
        Currently you have {books.length} books enjoy
      </span>
    </div>
  )
}

export default Navbar
