import React, {Component} from 'react';
import Search from './Search/Search';
import BookList from './Books/BookList';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  constructor(props){ 
    super(props);
    this.state = {
      books: [],
      error: null,
      dataLoaded: false
    }
  } 
  searchBooks = (search, printType, bookType) => {
    const API_KEY = "AIzaSyDL_pogvp_aolJJeo3H12UDC6rIphF9Qeo"
    const url = (bookType) ? 
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${printType}&filter=${bookType}&key=${API_KEY}`
      :  `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${printType}&key=${API_KEY}`
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        if(data.totalItems != 0) {
          this.setState({
            books: data.items,
            error: null,
            dataLoaded: true
          })
        }
        else {
          this.setState({
            books: null,
            error: "No books found. Try Again",
            dataLoaded: false
          })
        }
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
    }
    render(){
      const showApp = (this.state.dataLoaded)? <BookList books = {this.state.books}/> : <p>Search for a title above!</p>
      const errorMessage = (this.state.error)? 
        <>
          <img className="errorImg" src="https://cdn.iconscout.com/icon/free/png-256/arrow-arrows-relode-retry-tryagain-1-1076.png">
          </img> <p className="errorText">{this.state.error}</p> 
        </>
        : null
      return(
        <main className="App">
          <NavBar />
          <Search 
            onSearch = {(term, printType, bookType) => this.searchBooks(term, printType, bookType)}
          />
          {errorMessage}
          {showApp}
        </main>
      )
    }
}


export default App;