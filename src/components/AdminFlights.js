import React, {Component} from 'react'

class AdminFlights extends Component{

  constructor(){
    super();
    this.state = {
       flights: [
         {flightnum: '34', date:'16/09/2020', to: 'Perth', from:'Sydney', plane:'747'},
         {flightnum: '54', date:'17/09/2020', to: 'Brisbane', from:'Melbourne', plane:'747'},
         {flightnum: '24', date:'19/09/2020', to: 'Perth', from:'Melbourne', plane:'747'}
      ]
    };
    this.createFlight = this.createFlight.bind(this);
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

// Creating Flights ///
class CreateFlights extends Component{

  constructor(){
    super();
    this.state = {
      flightnum: '',
      date:'',
      to: '',
      from:'',
      plane:''
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
    this.setState({flightnum: event.target.value});
  }

  _flightDate(event){
    this.setState({date: event.target.value});
  }

  _flightTo(event){
    this.setState({to: event.target.value});
  }

  _flightFrom(event){
    this.setState({from: event.target.value});
  }

  _flightPlane(event){
    this.setState({plane: event.target.value});
  }

  _submitFlight(event){
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({flightnum: '', date:'', to: '', from:'', plane:''});
  }


 render(){
   return(
     ///// Create Flight Input ///////
     <div>
      <form onSubmit = {this._submitFlight} >
        Flight#:
        <input type="text" onChange={this._flightNumber} value={this.state.flightnum}/>
        Date:
        <input type="date" onChange={this._flightDate} value={this.state.date}/>
        from:
        <input type="text" onChange={this._flightFrom} value={this.state.from}/>
        To:
        <input type="text" onChange={this._flightTo} value={this.state.to}/>
        Plane:
        <input type="text" onChange={this._flightPlane} value={this.state.plane}/>
        <input type="submit" value= "Save" />
      </form>
     </div>
   )
 }

}

///// Show flights /////
const ShowFlights = (props) => {

   return(
     <div>
     <h1> Flights </h1>
      {props.flight.map ((f) => <p>  {f.date} | {f.flightnum} | {f.from} | {f.to} |  {f.plane} </p>)}
     </div>
   )
 };


export default AdminFlights;
