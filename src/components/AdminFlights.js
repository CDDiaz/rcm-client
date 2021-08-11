import React, {Component} from 'react'

// Creating Flights ///

class AdminFlights extends Component{

  constructor(){
    super();
    this.state = {
      flightnum: '',
      date:'',
      to: '',
      from:'',
      plane:''
    }
  }
 render(){
   return(
     <div>
      <h1> Create New Flight </h1>
      <CreateFlights />
      <ShowFlights />
     </div>
   )
 }

}

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
  }

  _flightNumber(event){
    this.setState({flightnum: event.target.value})
  }

  _flightDate(event){
    this.setState({date: event.target.value})
  }

  _flightTo(event){
    this.setState({to: event.target.value})
  }

  _flightFrom(event){
    this.setState({from: event.target.value})
  }

  _flightPlane(event){
    this.setState({plane: event.target.value})
  }
 render(){
   return(
     <div>
      <form>
        Flight#:
        <input type="text" onChange={this._flightNumber}/>
        Date:
        <input type="date" onChange={this._flightDate}/>
        from:
        <input type="text" onChange={this._flightFrom}/>
        To:
        <input type="text" onChange={this._flightTo}/>
        Plane:
        <input type="text" onChange={this._flightPlane}/>
        <input type="submit" value= "Save"/>
        <input type="submit" value= "Cancel"/>
      </form>
     </div>
   )
 }

}


class ShowFlights extends Component{

 render(){
   return(
     <div>
      <h1> Flights </h1>
     </div>
   )
 }

}

export default AdminFlights;
