import React, {Component} from 'react';

export default class SearchInput extends Component {
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.onSearch(this.searchInput.value, this.printType.value, this.bookType.value);
    };
    render() {
        return (
            <form className="book-search">
                <div className="book-search--search">
                    <label for="printType">Search: </label>
                    <input type="text" id="search-input" placeholder="Type to find a book" 
                        ref = {(input) => this.searchInput = input} 
                    />
                    <button type="submit" onClick = {e => this.handleSubmit(e)}>
                        Search
                    </button>
                </div>
                <div className="book-search--filters">
                    <label for="printType">Print Type:</label>
                    <select id="printType"  ref = {(select) => this.printType = select} >
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>

                    <label for="bookType">Book Type:</label>
                    <select id="bookType" ref = {(select) => this.bookType = select}>
                        <option value="">No Filter</option>
                        <option value="partial">Preview Available</option>
                        <option value="full">Full Preview Only</option>
                        <option value="ebooks">eBooks Only</option>
                        <option value="free-ebooks">Free eBooks Only</option>
                        <option value="paid-ebooks">Paid eBooks Only</option>
                    </select>
                </div>
            </form>
        )
    }
}