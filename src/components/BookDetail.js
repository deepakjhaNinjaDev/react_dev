/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { BookContext } from '../context/BookContext'
import { REMOVE_BOOK } from '../actionTypes/bookActionType'

const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BookContext)
  const { title, author } = book
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li onClick={() => dispatch({ type: REMOVE_BOOK, book })}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  )
}

BookDetail.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default BookDetail
