import React, {Component} from 'react';

import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';


export default class Search extends Component {
    render() {
        return(
            <SearchInput
                onSearch = {(term, printType, bookType) => this.props.onSearch(term, printType, bookType)}
            />
        )
    }
}