import uuid from 'react-uuid'

import { ADD_BOOK, REMOVE_BOOK } from '../actionTypes/bookActionType'

const BookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
        },
      ]
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id)
    default:
      return state
  }
}

export default BookReducer
