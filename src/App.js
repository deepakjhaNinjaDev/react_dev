import React from 'react'
import Navbar from './components/NavBar'
import BookContextProvider from './context/BookContext'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  )
}

export default App
