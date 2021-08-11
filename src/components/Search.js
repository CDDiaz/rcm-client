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
  constructor() {
    super();
    this.state = { origin: '', destination: '' };
    this._handleOrigin = this._handleOrigin.bind(this);
    this._handleDestination = this._handleDestination.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log(this.state.origin, this.state.destination);
    // this.props.onSubmit( this.state.origin, this.state.destination );
  }

  _handleOrigin(event) {
    console.log('Changes made');
    this.setState({ origin: event.target.value });
  }

  _handleDestination(event) {
    console.log('Changes made');
    this.setState({ destination: event.target.value });
  }

  render() {
    return(
      <div>
        <h2> FORM </h2>
        <form onSubmit={ this._handleSubmit }>
          <p>Origin:</p>
          <input onChange={ this._handleOrigin } type="text" name="origin" placeholder="Sydney" />
          <p>Destination:</p>
          <input onChange={ this._handleDestination } type="text" name="destination" placeholder="Perth" />
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
