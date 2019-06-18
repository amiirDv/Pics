import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component  {
    
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers: {
            Authorization:
             'Client-ID `d126f94e7897c270c1235c71ae0bc1c88112ede02379df78058b40a00e58e9c7'
        } 
    });
}


render(){
    return(
        <div className="ui container">
        <SearchBar
        onSubmit={this.onSearchSubmit}/> 
        </div>
        );
        
    };
}

export default App;