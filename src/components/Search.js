import React, { Component } from 'react';


class Search extends Component {
  render() {
    return(
      <div>
        <h1>Searching</h1>
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
};

class SearchForm extends Component {
  render() {
    return(
      <div>
        <h2> FORM </h2>
        <form>
          <p>Origin:</p>
          <input type="text" name="origin" placeholder="Sydney" />
          <p>Destination:</p>
          <input type="text" name="destination" placeholder="Perth" />
          <br/>
          <br/>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

class SearchResults extends Component {
  render() {
    return(
      <h2> RESULTS </h2>
    );
  }
}

export default Search;
