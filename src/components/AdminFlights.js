import React, {Component} from 'react'
import axios from 'axios';

const SERVER_URL = 'https://rcm-airlines.herokuapp.com/flights.json'


class AdminFlights extends Component{

  constructor(){
    super();
    this.state = {
       flights: []
    };

    this.createFlight = this.createFlight.bind(this);
  }

  componentDidMount(){
    const fetchFlights = () => {
      axios.get(SERVER_URL).then ((response) => {
        this.setState({flights: response.data })
      });
    }
    fetchFlights();
  }

  createFlight(childstate){
    this.setState({flights: [...this.state.flights, childstate]});
    }

  render(){
   return(
     <div>
      <h1> Create New Flight </h1>
      <CreateFlights onSubmit={ this.createFlight } />
      <ShowFlights flight={this.state.flights}/>
     </div>
   )
 }

}

////////////////////////////////// Creating Flights ////////////////////////////
class CreateFlights extends Component{

  constructor(){
    super();
    this.state = {
      flight_number: '',
      date:'',
      destination: '',
      origin:'',
      airplane:''
    }
    this._flightNumber = this._flightNumber.bind(this)
    this._flightDate = this._flightDate.bind(this)
    this._flightTo = this._flightTo.bind(this)
    this._flightFrom = this._flightFrom.bind(this)
    this._flightPlane = this._flightPlane.bind(this)
    this._submitFlight = this._submitFlight.bind(this)
  }

///// onchange event  /////
  _flightNumber(event){
    this.setState({flight_number: event.target.value});
  }

  _flightDate(event){
    this.setState({date: event.target.value});
  }

  _flightTo(event){
    this.setState({destination: event.target.value});
  }

  _flightFrom(event){
    this.setState({origin: event.target.value});
  }

  _flightPlane(event){
    this.setState({airplane: event.target.value});
  }

  _submitFlight(event){
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({flight_number: '', date:'', destination: '', from:'', plane:''});

  }


 render(){
   return(
                            ///// Create Flight Input ///////
     <div>
      <form onSubmit = {this._submitFlight} >
        Flight#:
        <input type="text" onChange={this._flightNumber} value={this.state.flight_number}/>
        Date:
        <input type="date" onChange={this._flightDate} value={this.state.date}/>
        From:
        <input type="text" onChange={this._flightFrom} value={this.state.origin}/>
        To:
        <input type="text" onChange={this._flightTo} value={this.state.destination}/>
        Plane:
        <input type="text" onChange={this._flightPlane} value={this.state.plane}/>
        <input type="submit" value= "Save" />
      </form>
     </div>
   )
 }

}

////////////////////////////////// Show flights ///////////////////////////////
const ShowFlights = (props) => {

   return(
     <div>
     <h1> Flights </h1>
      {props.flight.map ((f) => <p>  {f.date} | {f.flight_number} | {f.origin} | {f.destination} | {f.airplane.name} | {f.airplane.column * f.airplane.row} </p>)}
     </div>
   )
 };


export default AdminFlights;
