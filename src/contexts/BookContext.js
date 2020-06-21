import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: 'Name of the Wind'},
        {id: 2, title: 'The Final Empire'},
        {id: 3, title: 'The Hero of Ages'},
        {id: 4, title: 'The Way of the Kings'}
    ])
    return(
        <BookContext.Provider value= {{books}}>
        {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider