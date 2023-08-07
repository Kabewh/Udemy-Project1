import React, {useContext} from 'react'
import BookShow from './BookShow'
import BooksContext from '../context/books'


const BookList = ({ books, onDelete, onEdit }) => {
    const {count, incrementCount} = useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    })
    return (
        <div className='book-list'>
            {renderedBooks}
            </div>
    )
}

export default BookList