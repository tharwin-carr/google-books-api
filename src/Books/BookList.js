import React, {Component} from 'react';
import Book from './Book';


export default class BookList extends Component {
    static defaultProps = {
        books: null
    }
    render() {
        console.log(this.props.books)
        const books = (this.props.books).map(book => {
            const volumeInfo = book.volumeInfo;
            const saleInfo = book.saleInfo;
            const image = (volumeInfo.imageLinks) ? volumeInfo.imageLinks.thumbnail : "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6"
            const price = (saleInfo.retailPrice) ? `${saleInfo.retailPrice.amount} ${saleInfo.retailPrice.currencyCode}` : saleInfo.saleability;
            return(
                <Book 
                    key = {book.id}
                    bookHash = {book.id}
                    title = {volumeInfo.title}
                    authors = {volumeInfo.authors}
                    desc = {volumeInfo.description}
                    img = {image}
                    price = {price}
                    link = {volumeInfo.previewLink}
            />)
        })
    return (
        <div className = "book-list-wrapper">
            {books}
        </div>
    )    
}}
