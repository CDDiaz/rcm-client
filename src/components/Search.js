import React, { Component } from 'react';
import axios from 'axios';


const SERVER_URL = 'http://localhost:3000/flights.json';

class Search extends Component {
  constructor() {
    super();
    this.state = { search: [], flights: [] };
    this.newSearch = this.newSearch.bind(this);
  }

  componentDidMount() {
    const fetchFlights = () => {
      console.log('fetching flights');
      axios.get(SERVER_URL).then((results) => {
        this.setState({ flights: results.data });
        console.log("Results.data", results.data);
        console.log("This state from fetchFlights", this.state);
      });
    };
    fetchFlights();

    const findFlights = () => {
      console.log("Finding flights");
      console.log("This state from findFlights", this.state);
    };
    findFlights();
  }



  newSearch(s) {
    console.log('new search', s );
    this.setState( { search: [...this.state.search, s]  } );
    console.log("This state from newSearch", this.state);
    // axios.get(SERVER_URL, { origin: s.origin, destination: s.destination }).then((result) => {
    //   console.log(result);
    // });
  }

  render() {
    return(
      <div>
        <h1>Searching</h1>
        <SearchForm onSubmit={ this.newSearch }/>
        <SearchResults search={ this.state.search } flights={ this.state.flights } />
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
    this.props.onSubmit( this.state );
    // this.props.onSubmit( this.state.destination );
    console.log("Submit props", this.state);
    this.setState( { origin: '', destination: ''});
  }

  _handleOrigin(event) {
    console.log('Changes made');
    this.setState({ origin: event.target.value });
  }

  _handleDestination(event) {
    console.log('Changes made');
    this.setState({ destination: event.target.value });
  }

  showForm() {
    return(
      <div>
        <h2> FORM </h2>
        <form onSubmit={ this._handleSubmit }>
          <p>Origin:</p>
          <input onChange={ this._handleOrigin } value={this.state.origin} type="text" name="origin" placeholder="Sydney" />
          <p>Destination:</p>
          <input onChange={ this._handleDestination } value={this.state.destination} type="text" name="destination" placeholder="Perth" />
          <br/>
          <br/>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

const SearchResults = (props) => {
  console.log("SearchResults");
  console.log("SEARCH Props from SearchResults", props.search);
  console.log("FLIGHTS Props from SearchResults", props.flights);

  const searchInput = props.search[props.search.length -1];
  console.log("Search input", searchInput);
  const allFlights = props.flights;
  console.log("ASDASD", allFlights)
  let selectedOrigin = '';
  let selectedDestination = '';

  if (!!searchInput){
    selectedOrigin = searchInput.origin.toLowerCase();
    selectedDestination = searchInput.destination.toLowerCase();
    console.log("selectedOrigin", selectedOrigin);
    console.log("selectedDestination", selectedDestination);
  }



  return (
    <div>
      <br/>
      <h1>Flight Search Results</h1>
        { props.flights.filter(flight => flight.origin.toLowerCase() === selectedOrigin && flight.destination.toLowerCase() === selectedDestination).map(filteredFlight => (
          <li key={ filteredFlight.id }>
            <a href={"/flight/" + filteredFlight.flight_number}>Flight: {filteredFlight.flight_number}</a>,
            From: {filteredFlight.origin},
            To: {filteredFlight.destination},
            Date: {filteredFlight.date},
            Plane: {filteredFlight.airplane.name}
          </li>
        ))}
        <br/>


    </div>
  )
}


export default Search;
