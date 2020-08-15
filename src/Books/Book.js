import React, {Component} from 'react';

export default class Book extends Component {
    parseAuthors = (listOfAuthors) => {
        let authors = ""
        if (typeof (listOfAuthors) === "object") {
            (listOfAuthors).map(author => {
                if (listOfAuthors.length > 1 && author !== listOfAuthors[listOfAuthors.length - 1]) {
                    authors += `${author}, `
                }
                else authors += author
            })
            return authors
        }
        else {
            return "Could not find author"
        }
    }
    render(){
        return(
            <div className="book-wrapper">
                <h1>{this.props.title}</h1>
                <div className="book-container">
                    <div className="book-container--image">
                        <a href={this.props.link} target="_blank">
                            <img src={this.props.img} />
                        </a>
                    </div>
                    <div className="book-container--description">
                        <div>   
                            <h2>Author/s: {this.parseAuthors(this.props.authors)}</h2>
                            <h2>Price: {this.props.price} {this.props.currencyCode}</h2>   
                        </div>
                        <p>{this.props.desc}</p>  
                    </div>            
                </div>
            </div>
        )
    }    
}