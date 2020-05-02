import React, { useContext, useState, useRef } from 'react'
import { BookContext } from '../context/BookContext'
import { ADD_BOOK } from '../actionTypes/bookActionType'

const BookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const setFocusRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: ADD_BOOK, book: { title, author } })
    setTitle('')
    setAuthor('')
    setFocusRef.current.focus()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={setFocusRef}
        type="text"
        required
        value={title}
        placeholder="book title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        required
        value={author}
        placeholder="author name"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" text="submit" />
    </form>
  )
}

export default BookForm
